import { Router, Request, Response } from 'express'

const router = Router()  


router.get('/', ( req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All right'
    })
})
router.post('/', (req: Request, res: Response)=> {
    const body = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        body: body,
        de: de
    })
})
router.post('/:id', (req: Request, res: Response)=> {
    const { id } = req.params

    res.json({
        ok: true,
        id
    })
})


export default router