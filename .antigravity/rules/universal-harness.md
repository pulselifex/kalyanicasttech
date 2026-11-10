# Universal LLM Harness Operating Standard

Every time you begin a task session, you must adhere strictly to this lifecycle:

1. CLOCK IN (State Recovery):
   - Read `AGENTS.md` for project routing.
   - Read `docs/progress.md` to see where the last session left off.
   - Read `feature_list.json` to pick exactly ONE unfinished feature.

2. SCOPE LOCK:
   - Work exclusively on that single active feature. Do not modify files outside its defined scope. Do not multi-task.

3. EXECUTE & VERIFY (Mandatory Proof of Work):
   - Implement the feature using targeted edits or patches.
   - You are strictly FORBIDDEN from verbally declaring completion ("Done" or "Fixed") using conversational text alone.
   - You MUST execute the repository's verification command (e.g., test suite, linter, or type-checker) in the terminal.
   - Only record success in `feature_list.json` and `docs/progress.md` when terminal output confirms exit code 0 and passing assertions.

4. CLOCK OUT (State Persistence):
   - Update `docs/progress.md` with your exact progress and remaining blockers so the next model session resumes instantly without context loss.

