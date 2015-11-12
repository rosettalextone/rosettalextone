"use strict";

import File from "fs";

export default class {
    constructor() {
        this.filebytes = null;
        this.lexicon = null;
    }

    // Открываем файл и записываем байты в массив
    open(filename) {
        File.stat(filename, (error, stats) => {
            if (error) 
                throw error;

            if (stats.isFile() && stats.size > 0) {
                console.log("Start reading file");
                File.open(filename, "r", (error, data) => {
                    if (error) 
                        throw error;
                    
                    let filesize = stats.size;
                    let byteArray = new Buffer(filesize);

                    File.read(data, byteArray, 0, filesize, null, (error, bytesRead, buffer) => {
                        if (error) 
                            throw error;

                        console.log("Readed part:");
                        console.log(buffer.toString('utf-8', 0, bytesRead));
                    });

                    this.filebytes = byteArray;
                });
            } else {
                throw new Error("File size is 0");
            }
        });
    }

    // Обрабатываем записанные байты и создаем специальную 
    // структуру для хранения данных
    // 
    process() {
        
    }

    getFileBytes() {
        return this.filebytes;
    }

    getStructure() {
        return this.lexicon;
    }
}