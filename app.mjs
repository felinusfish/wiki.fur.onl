// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
    notes: {
    // Serve notes at the root, e.g. /my-note/
    pathPrefix: "/",
    },
    sidebar: {
        sections: [{
                label: "GodotSteam",
                groups: [
                {
                    query: createNotesQuery({
                    pattern: "^/GodotSteam/",
                    }),
                },
                ],
            },
        ]
    }
});
