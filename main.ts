import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line aimed at the machine itself. The joke runs on
// three escalating beats — spinning fans, a 91-degree temperature, and
// a Task Manager verdict that pins the bottleneck on the speaker — and
// it lands on the artifact instead of explaining itself. No battery,
// charging, or reboot cliche: the premise is the machine, not the
// human using it.
const entryLine =
  "Are you running on my GPU? Every time you answer, my fans spin up, my temperature hits 91 degrees, and Task Manager says the bottleneck is me.";

// Gate: exactly one non-empty line of 1-200 code points. Count code
// points (not UTF-16 units) so an emoji or accented character counts
// as the single character a reader sees. Measure the line itself,
// not the joined output, so the trailing newline never leaks into
// the count.
const lines = [entryLine];
const lineLength = [...entryLine].length;
const MIN_LINE_LENGTH = 1;
const MAX_LINE_LENGTH = 200;
if (lines.length !== 1) {
  throw new Error(`entry must be exactly one line, got ${lines.length}`);
}
if (entryLine.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (lineLength < MIN_LINE_LENGTH || lineLength > MAX_LINE_LENGTH) {
  throw new Error(
    `entry must be ${MIN_LINE_LENGTH}-${MAX_LINE_LENGTH} characters, got ${lineLength}`,
  );
}

const entryText = lines.join("\n") + "\n";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
