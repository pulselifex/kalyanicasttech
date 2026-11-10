# WP-5B.24A — IMAGE USAGE & ALT TEXT AUDIT

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24A  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aeddb4414795a799d15bb39`  

---

## 1. Homepage Hero Carousel 22-Slide Alt Text Audit

Management Directive #8 mandated:
> *"Check all 22 carousel image alt descriptions. Avoid claims such as 'for high-volume cargo' or 'for metallurgical cargo' unless supported and necessary. Write short descriptions of the actual visible image. Ensure all five GCT photographs have accurate, useful alt text."*

Below is the verified inventory of the 22 carousel slides in `src/components/site/HomeHeroCarousel.tsx`:

| Slide ID | Slide Name & Generic Category | Source Image Path | Verified WP-5B.24A Alt Text (Description of Visible Image) |
| :---: | :--- | :--- | :--- |
| `cont-01` | Freight Container | `/assets/containers/20' ISO Container on rake.png` | `Standard freight container on rail rake` |
| `cont-02` | Freight Container | `/assets/containers/DSC_1608.JPG.jpeg` | `Dry freight container in factory yard` |
| `cont-03` | Specialised Freight Container | `/assets/containers/container-2.jpg` | `Specialised freight container with side access doors` |
| `cont-04` | Industrial Freight Container | `/assets/containers/Relink Logistics Cotton Loading Showcase.png` | `Freight container during cargo loading` |
| `cont-05` | Specialised Freight Container | `/assets/containers/Dwarf Container.jpg` | `Specialised low-profile freight container` |
| `cont-06` | Industrial Freight Container | `/assets/containers/Spl Cont Salt n Steel cargoHD.jpeg` | `Industrial freight container in yard` |
| `cont-07` | Industrial Freight Container | `/assets/containers/model-07-hc-open-top-coiltainer.jpg` | `Open-top freight container with tarpaulin cover` |
| `cont-08` | Industrial Freight Container | `/assets/containers/Salt  n multipurpose Containers.png` | `Industrial freight container with side corrugated panels` |
| `cont-09` | Industrial Freight Container | `/assets/containers/model-09-universal-openable-top.png` | `Industrial freight container with openable roof` |
| `cont-10` | Industrial Freight Container | `/assets/containers/model-10-42ft-hc-open-coiltainer-8-5w.jpg` | `Extended length open-top freight container` |
| `cont-11` | Specialised Freight Container | `/assets/containers/40' Dwarf Container Wooden log.png` | `Dwarf container loaded on railway wagon` |
| `cont-12` | Industrial Freight Container | `/assets/containers/CJ DARCL42 feet contr.png` | `Industrial freight container with side access` |
| `cont-13` | Industrial Freight Container | `/assets/containers/model-13-42ft-hc-coil-tmt.jpg` | `Open-top steel freight container with side framing` |
| `cont-14` | Tank Container | `/assets/containers/model-14-20ft-tank-container.jpg` | `ISO tank container in structural frame` |
| `cont-15` | Bulk Freight Container | `/assets/containers/model-15-20ft-hopper-container.jpg` | `Hopper container with bottom discharge valves` |
| `cont-16` | Specialised Freight Container | `/assets/containers/Three-Tier Motorcycle Transport Container.png` | `Enclosed multi-tier freight container` |
| `wagon-01` | Railway Wagon Concept | `/assets/wagons/Car Carrier 9 Car.png` | `Bi-level multi-deck auto car carrier wagon design` |
| `wagon-02` | Railway Wagon Concept | `/assets/wagons/New Container Wagon.png` | `Container flat wagon design` |
| `wagon-03` | Railway Wagon Concept | `/assets/wagons/Next-Generation Container Wagon Design.png` | `New wagon design concept visualization` |
| `wagon-04` | Railway Wagon Concept | `/assets/wagons/RORO Wagon Container.png` | `Roll-on roll-off container wagon design` |
| `wagon-05` | Railway Wagon Concept | `/assets/wagons/Special Wagon Design3.png` | `Specialised railway freight wagon design` |
| `banner-01` | Rail Freight Heritage | `/assets/rail/Double-Stacked Eco Freight at Sunset.png` | `Double-stacked intermodal container train on Western Railway` |

---

## 2. Authentic GCT Operational Photographs Audit

The five authentic photographs extracted from `03_Shivlakha_Logistics\Rail n Yard Operations` (EXIF verified 14–15 September 2026 Canon EOS 5D Mark IV & Hasselblad L2D-20c drone sensor) are used strictly to represent the **Gati Shakti Terminal** and are nowhere confused with the Inland Container Terminal or Rewari manufacturing plant.

| Filename | Dimensions & Size | Alt Text & Visual Description | Deployment Locations |
| :--- | :--- | :--- | :--- |
| `gct-shivlakha-rake-handling-ops.jpg` | 1920 × 1280 px<br>(344 KB) | `Operational container rake handling and reach-stacker at Gati Shakti Terminal Shivlakha private rail siding` | - Homepage: Terminal Division Card<br>- Facilities: Shivlakha Location Card<br>- Our Journey: Milestone 6 (15 Sept 2026)<br>- Shivlakha: Hero banner & Gallery item 1<br>- GCT dedicated page: Hero header<br>- Gallery: Category Gati Shakti Terminal (`gst-1`) |
| `gct-shivlakha-rake-handling-aerial.jpg` | 1920 × 1439 px<br>(858 KB) | `Aerial perspective of broad-gauge container rake stationed at Shivlakha private rail siding` | - Shivlakha: Gallery item 6<br>- Gallery: Category Gati Shakti Terminal (`gst-2`) |
| `gct-shivlakha-yard-operations.jpg` | 1920 × 1280 px<br>(244 KB) | `Reach-stacker maneuvering on reinforced concrete apron at Shivlakha terminal yard` | - Shivlakha: Gallery item 5<br>- Gallery: Category Gati Shakti Terminal (`gst-3`) |
| `gct-shivlakha-container-stacking-yard.jpg` | 1920 × 1280 px<br>(252 KB) | `Paved container staging yard and stacked freight units at Gati Shakti Terminal Shivlakha` | - Available in asset catalog for operational staging representation |
| `gct-shivlakha-rail-terminal-siding.jpg` | 1920 × 1439 px<br>(606 KB) | `Operational broad-gauge railway siding and track alignment at Shivlakha Gati Shakti Terminal` | - Homepage: Facility Footprint (Shivlakha Card)<br>- Facilities: Section 4 Integrated Platform showcase<br>- Shivlakha: Gallery item 4 |
