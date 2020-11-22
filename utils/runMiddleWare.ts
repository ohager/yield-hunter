import {NextApiRequest, NextApiResponse} from "next";

export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            return result instanceof Error
                ? reject(result)
                : resolve(result);
        })
    })
}
