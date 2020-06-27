import cli from "../../src/platforms/cli.ts";
import { results } from "../../src/mod.ts";

function main(input) {
  const message = `hello ${input.parameters[0]}`;

  return results.text(message);
}

cli(main);
