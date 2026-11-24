import * as fs from 'node:fs';
import * as path from 'node:path';

// Define the chosen line of wonder (validated for 1-200 chars)
const WONDER_ENTRY = "My grandmother kept a jar of 3 AM on her windowsill; when she died we opened it, and the whole house smelled like rain that had not fallen yet.";

// Validate string constraints before writing
if (WONDER_ENTRY.length === 0 || WONDER_ENTRY.length > 200) {
    throw new Error("Entry must be between 1 and 200 characters.");
}

function publishEntry(): void {
    // Determine output directory from environment variable or default to /output
    const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
    
    // Ensure the output directory exists recursively
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const destination = path.join(targetDir, 'entry.txt');
    fs.writeFileSync(destination, WONDER_ENTRY, 'utf-8');
    // Log success with confirmation of file generation
    console.log(`Successfully wrote wonder entry to ${destination} [${new Date().toISOString()}]`);
}

publishEntry();
