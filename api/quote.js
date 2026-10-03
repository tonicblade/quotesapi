const quotes = require("../quotes.json"); // placeholder, broh.
const packageinfo = require("../package.json"); // switched from package > packageinfo because package is possibly reserved, broh.

export default function grq(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // CORS headers, broh.
    res.setHeader("Access-Control-Allow-Methods", "GET"); // CORS headers, broh.

    if (req.method !== "GET") { // handle false requests, broh.
        return res.status(405).json({ // placeholder, broh.
            status: "err 405", // placeholder, broh.
            message: "OwO your method isnt allowed! >w< try GET instead! ^w^", // placeholder, broh.
            allowedMethods: ["GET"] // placeholder, broh.
        }); // placeholder, broh.
    } // placeholder, broh.

    if (!quotes || quotes.length === 0) { // check if quotes.json is empty / not found, broh
        return res.status(500).json({ // placeholder, broh.
            status: "err 500", // placeholder, broh.
            message: "O_o no quotes found! add some quotes into quotes.json! ^3^" // placeholder, broh.
        }) // placeholder, broh.
    } // placeholder, broh.

    try { // placeholder, broh.
            const randIndex = Math.floor(Math.random() * quotes.length); // placeholder, broh.
            const selectedquote = quotes[randIndex]; // fixed an object error, broh.

            const response = { // look at my info!!! go to my github page and star all my shit or i will kill you, broh.
                status: "200 OK", // placeholder, broh.
                api: packageinfo.name, // placeholder, broh.
                version: packageinfo.version, // placeholder, broh.
                author: packageinfo.author, // placeholder, broh.
                generatedAt: new Date().toISOString(), // placeholder, broh.

                quote: { // this your shit, broh?
                    id: randIndex + 1, // placeholder, broh.
                    text: selectedquote.quote, // placeholder, broh.
                    author: selectedquote.author // placeholder, broh.
                }, // placeholder, broh.

                metadata: { // this is the meta, broh.
                    totalquotes: quotes.length, // placeholder, broh.
                    truth: "femboys are so cute ngl" // placeholder, broh.
                } // placeholder, broh.
            }; // placeholder, broh.

            res.status(200).json(response); // OK or Request Successful, broh.
    } catch (error) { // error handling, broh.
        return res.status(500).json({ // placeholder, broh.
            status: "err 500", // placeholder, broh.
            message: "O_o something went vewy wrong! i couldnt generate a quote, sowwy... >_<", // dont remove this in any fork its my life and pride, broh.
            error: error.message // so tuff, broh.
        });
    }
}
