Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = "docs/source-content/sakana/Kalyani_Cast_Tech_Website_Content_Master_Final.docx"
$mdPath = "docs/source-content/sakana/Kalyani_Cast_Tech_Website_Content_Master_Final.md"

$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $docxPath).Path)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

[xml]$doc = $xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

$tables = $doc.SelectNodes('//w:tbl', $ns)
Write-Output "Total Tables in DOCX: $($tables.Count)"
for ($i=0; $i -lt $tables.Count; $i++) {
    $rows = $tables[$i].SelectNodes('.//w:tr', $ns)
    $firstRowCells = $rows[0].SelectNodes('.//w:tc', $ns)
    $headers = ($firstRowCells | ForEach-Object { 
        (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim() 
    }) -join ' | '
    Write-Output "Table $($i+1) (Rows: $($rows.Count)): $headers"
}

# Check appendix rows
$appTable = $tables[$tables.Count - 1]
$appRows = $appTable.SelectNodes('.//w:tr', $ns)
Write-Output "`nAppendix Table Rows in DOCX: $($appRows.Count)"
for ($r = 1; $r -lt $appRows.Count; $r++) {
    $cells = $appRows[$r].SelectNodes('.//w:tc', $ns)
    $rowText = ($cells | ForEach-Object { 
        (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim() 
    }) -join ' | '
    Write-Output "  Row $r : $rowText"
}
