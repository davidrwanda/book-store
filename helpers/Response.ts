export default class  payload{
    public static success(res:any, data:any|undefined = null, message: string, status: number)
    {
        res.status(status).
            json(data? 
                {
                    response: data.length, 
                    data: data, 
                    status:status, 
                    message:message
                }: 
                {
                    status:status,
                    message:message
                })
    }
    public static fail(res:any, err: any, status: number)
    {
        res.status(status).
            json
            ({
                status,
                err
            })
    }
}