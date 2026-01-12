// Add project node_modules to module resolution path
const projectRoot = '/Users/otiai10/proj/triax/recruiting';
require('module').globalPaths.push(`${projectRoot}/node_modules`);

const pptxgen = require('pptxgenjs');
const path = require('path');
const html2pptx = require('/Users/otiai10/.claude/plugins/cache/anthropic-agent-skills/document-skills/00756142ab04/skills/pptx/scripts/html2pptx.js');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Club TRIAX';
    pptx.title = 'Club TRIAX 2026 Recruiting';
    pptx.subject = 'Recruiting Presentation';

    const workDir = '/Users/otiai10/proj/triax/recruiting/workspace';
    const assetsDir = '/Users/otiai10/proj/triax/recruiting/assets/images';

    const slides = [
        'slide1.html',
        'slide2.html',
        'slide3.html',
        'slide4.html',
        'slide5.html',
        'slide6.html',
        'slide7.html',
        'slide8.html'
    ];

    // Background images for specific slides
    const bgImages = {
        0: path.join(assetsDir, '251130 (2173).jpg'),  // Slide 1: Title
        5: path.join(assetsDir, 'DSC09082.jpg'),        // Slide 6: Goal
        7: path.join(assetsDir, 'DSC09922.jpg'),        // Slide 8: Closing
    };

    for (let i = 0; i < slides.length; i++) {
        console.log(`Processing ${slides[i]}...`);
        const htmlPath = path.join(workDir, slides[i]);

        // Create slide first if we need background image
        let slideObj = null;
        if (bgImages[i]) {
            slideObj = pptx.addSlide();
            // Add background image first (covers entire slide)
            slideObj.addImage({
                path: bgImages[i],
                x: 0, y: 0, w: '100%', h: '100%',
                sizing: { type: 'cover' }
            });
        }

        // Process HTML (reuse slide if created)
        const options = { tmpDir: workDir };
        if (slideObj) {
            options.slide = slideObj;
        }
        await html2pptx(htmlPath, pptx, options);
    }

    const outputPath = '/Users/otiai10/proj/triax/recruiting/TRIAX_2026_Recruiting.pptx';
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
