"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (req, res) => {
    console.log("test/health");
    const postParam = req.body;
    try {
        if (!postParam) {
            const response = { message: "server is health", code: 200, data: "no data is catched in server!" };
            res.json(response);
        }
        else {
            const response = { message: "server is health", code: 200, data: postParam };
            res.cookie('name1', 'value1', {
                maxAge: 60000,
                httpOnly: false
            });
            res.json(response);
        }
    }
    catch (err) {
        console.log(err);
        const response = { message: "server is not health", code: 500 };
        res.send(response);
    }
};
//# sourceMappingURL=postTest.js.map