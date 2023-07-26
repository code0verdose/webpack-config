import path from "path";
import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig/buildWebpackConfig.js";
import { fileURLToPath } from "url";

export default (env) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const paths = {
    entry: path.resolve(__dirname, "src", "index.js"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
