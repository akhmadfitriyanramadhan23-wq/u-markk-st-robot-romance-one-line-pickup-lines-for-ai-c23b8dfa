import { mkdirSync, writeFileSync } from "node:fs";

// Robot Romance pickup line: addressed straight at the machine, three
// escalating beats — fans spin, temperature hits 91 degrees, and the
// punch lands on a quoted Task Manager verdict that flips the blame
// onto the speaker. No battery/charging/reboot cliche; the joke is
// the machine premise itself, and it ends on the artifact, not an
// explanation.
const lines = [
  "Are you running on my GPU? Every time you answer, my fans spin up, my temperature hits 91 degrees, and Task Manager says the bottleneck is me.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text.replace(/\n$/, "")].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
