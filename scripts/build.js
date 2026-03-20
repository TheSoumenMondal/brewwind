import { build, context } from "esbuild";

const watchMode = process.argv.includes("--watch");

const baseBuildOptions = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "neutral",
  target: ["es2020"],
};

const outputTargets = [
  {
    outfile: "dist/index.js",
    format: "esm",
  },
  {
    outfile: "dist/index.cjs",
    format: "cjs",
  },
];

const runBuild = async () => {
  if (watchMode) {
    const contexts = await Promise.all(
      outputTargets.map((target) =>
        context({
          ...baseBuildOptions,
          ...target,
        })
      )
    );

    await Promise.all(contexts.map((ctx) => ctx.watch()));
    console.log("[BrewWind] Watching for changes...");
    return;
  }

  await Promise.all(
    outputTargets.map((target) =>
      build({
        ...baseBuildOptions,
        ...target,
      })
    )
  );

  console.log("[BrewWind] Build complete: dist/index.js and dist/index.cjs");
};

runBuild().catch((error) => {
  console.error("[BrewWind] Build failed", error);
  process.exit(1);
});
