import fs from 'fs';
import path from 'path';
import jsonData from './data.json' assert { type: 'json' };

// Define the path to your JSON files
const files = [
    'my-storybook-app/src/tokens/ComponentTokens.json',
    'my-storybook-app/src/tokens/Primitives.json',
    'my-storybook-app/src/tokens/SemanticColors.json',
    'brand-c.jsomy-storybook-app/src/tokens/StyleTokens.json',
];

// Function to convert tokens to CSS variables
function tokensToCSS(tokens, themeName) {
    let cssContent = `/* ${themeName} Theme CSS Variables */\n:root {\n`;

    // Loop through tokens and convert to CSS variable format
    for (const [key, token] of Object.entries(tokens)) {
        const variableName = `--${key.replace(/_/g, '-')}`;
        cssContent += `    ${variableName}: ${token.value};\n`;
    }

    cssContent += `}\n`;
    return cssContent;
}

// Read each JSON file and convert tokens
files.forEach((fileName) => {
    const filePath = path.join(__dirname, fileName);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        // Parse the JSON content
        const tokens = JSON.parse(data);

        // Generate CSS variables for each token set
        const cssVariables = tokensToCSS(tokens, path.basename(fileName, '.json'));

        // Write the output to a CSS file
        const outputPath = path.join(__dirname, `output-${path.basename(fileName, '.json')}.css`);
        fs.writeFile(outputPath, cssVariables, (err) => {
            if (err) throw err;
            console.log(`CSS variables for ${fileName} written to ${outputPath}`);
        });
    });
});
