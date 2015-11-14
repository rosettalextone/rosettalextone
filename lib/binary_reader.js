import File from "fs";

export default class {
    static readFile(filename) {
        let buffer;

        let stats = File.statSync(filename);

        if (stats.isFile() && stats.size > 0) {
            buffer = File.readFileSync(filename);
        }

        return buffer;
    }
}