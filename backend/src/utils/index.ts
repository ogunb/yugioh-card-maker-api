import { Request, Response } from 'express'
import { HttpRequest } from '../models/http-request'

export function makeExpressCallback (controller: (httpRequest: HttpRequest) => any) {
    return async (req: Request, res: Response) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        }

        try {
            const httpResponse = await controller(httpRequest)

            res.header({
                'Content-Type': 'application/json',
                ...httpResponse.headers
            })
            res.type('json')
            res.status(httpResponse.statusCode).send(httpResponse.body)
        } catch (err) {
            res.status(500).send({ error: 'An unknown has error occurred.' })
        }
    }
}
