public async getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    pool.query('SELECT * FROM my_users WHERE id = $1',[id], (error,result) =>
    {
        if(error)
        {
            res.status(404).send("You have entered wrong id");
        }
        else
        {
            res.status(200).json(result.rows);
        }
    }
    );
}
public async createUser(req: Request, res: Response) {
    const {firstName,middleName,lastName,email,phone,role,address} = req.body;
    pool.query('INSERT INTO my_users(firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7)',
    [firstName,middleName,lastName,email,phone,role,address],(err,result)=>
    {
        if(err)
        {
            throw err;
        }
        else
        {
            res.status(201).send("User added successfully");
        }
    }
    ); 
     
}
public async updateUser(req: Request, res: Response) {

    const id = Number(req.params.id);
    const {firstName,middleName,lastName,email,phone,role,address} = req.body;
    pool.query('UPDATE my_users SET firstname = $1, middlename = $2, lastname = $3, email = $4, phone = $5, role = $6, address = $7 WHERE id = $8',
    [firstName,middleName,lastName,email,phone,role,address,id],(err,result) =>
    {
        if(err)
        {
            res.status(400).send("Failed due to bad input");
            throw err;
        }
        else{
            res.status(200).send("Updated");
        }
    }
    );
}
public async deleteUser(req: Request, res: Response) {
   
    const id = Number(req.params.id);
    pool.query('DELETE FROM my_users WHERE id = $1',[id],(err,result)=>
    {
        if(err)
        {
            throw err;
        }
        else
        {
            res.status(200).send("Deleted");public async getUserById(req: Request, res: Response) {
                const id = Number(req.params.id);
                pool.query('SELECT * FROM my_users WHERE id = $1',[id], (error,result) =>
                {
                    if(error)
                    {
                        res.status(404).send("You have entered wrong id");
                    }
                    else
                    {
                        res.status(200).json(result.rows);
                    }
                }
                );
            }
            public async createUser(req: Request, res: Response) {
                const {firstName,middleName,lastName,email,phone,role,address} = req.body;
                pool.query('INSERT INTO my_users(firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7)',
                [firstName,middleName,lastName,email,phone,role,address],(err,result)=>
                {
                    if(err)
                    {
                        throw err;
                    }
                    else
                    {
                        res.status(201).send("User added successfully");
                    }
                }
                ); 
                 
            }
            public async updateUser(req: Request, res: Response) {
        
                const id = Number(req.params.id);
                const {firstName,middleName,lastName,email,phone,role,address} = req.body;
                pool.query('UPDATE my_users SET firstname = $1, middlename = $2, lastname = $3, email = $4, phone = $5, role = $6, address = $7 WHERE id = $8',
                [firstName,middleName,lastName,email,phone,role,address,id],(err,result) =>
                {
                    if(err)
                    {
                        res.status(400).send("Failed due to bad input");
                        throw err;
                    }
                    else{
                        res.status(200).send("Updated");
                    }
                }
                );
            }
            public async deleteUser(req: Request, res: Response) {
               
                const id = Number(req.params.id);
                pool.query('DELETE FROM my_users WHERE id = $1',[id],(err,result)=>
                {
                    if(err)
                    {
                        throw err;
                    }
                    else
                    {
                        res.status(200).send("Deleted");
                    }
                });
             public async getUserById(req: Request, res: Response) {
        const id = Number(req.params.id);
        pool.query('SELECT * FROM my_users WHERE id = $1',[id], (error,result) =>
        {
            if(error)
            {
                res.status(404).send("You have entered wrong id");
            }
            else
            {
                res.status(200).json(result.rows);
            }
        }
        );
    }
    public async createUser(req: Request, res: Response) {
        const {firstName,middleName,lastName,email,phone,role,address} = req.body;
        pool.query('INSERT INTO my_users(firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [firstName,middleName,lastName,email,phone,role,address],(err,result)=>
        {
            if(err)
            {
                throw err;
            }
            else
            {
                res.status(201).send("User added successfully");
            }public async getUserById(req: Request, res: Response) {
                const id = Number(req.params.id);
                pool.query('SELECT * FROM my_users WHERE id = $1',[id], (error,result) =>
                {
                    if(error)
                    {
                        res.status(404).send("You have entered wrong id");
                    }
                    else
                    {
                        res.status(200).json(result.rows);
                    }
                }
                );
            }
            public async createUser(req: Request, res: Response) {
                const {firstName,middleName,lastName,email,phone,role,address} = req.body;
                pool.query('INSERT INTO my_users(firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7)',
                [firstName,middleName,lastName,email,phone,role,address],(err,result)=>
                {
                    if(err)
                    {
                        throw err;
                    }
                    else
                    {
                        res.status(201).send("User added successfully");
                    }
                }
                ); 
                 
            }
            public async updateUser(req: Request, res: Response) {
        
                const id = Number(req.params.id);
                const {firstName,middleName,lastName,email,phone,role,address} = req.body;
                pool.query('UPDATE my_users SET firstname = $1, middlename = $2, lastname = $3, email = $4, phone = $5, role = $6, address = $7 WHERE id = $8',
                [firstName,middleName,lastName,email,phone,role,address,id],(err,result) =>
                {
                    if(err)
                    {
                        res.status(400).send("Failed due to bad input");
                        throw err;
                    }
                    else{
                        res.status(200).send("Updated");
                    }
                }
                );
            }
            public async deleteUser(req: Request, res: Response) {
               
                const id = Number(req.params.id);
                pool.query('DELETE FROM my_users WHERE id = $1',[id],(err,result)=>
                {
                    if(err)
                    {
                        throw err;
                    }
                    else
                    {
                        res.status(200).send("Deleted");
                    }
                });
             
            }
          
        }
        
        export const userController = new controller();
        onse) {

        const id = Number(req.params.id);
        const {firstName,middleName,lastName,email,phone,role,address} = req.body;
        pool.query('UPDATE my_users SET firstname = $1, middlename = $2, lastname = $3, email = $4, phone = $5, role = $6, address = $7 WHERE id = $8',
        [firstName,middleName,lastName,email,phone,role,address,id],(err,result) =>
        {
            if(err)
            {
                res.status(400).send("Failed due to bad input");
                throw err;
            }
            else{
                res.status(200).send("Updated");
            }
        }
        );
    }
    public async deleteUser(req: Request, res: Response) {
       
        const id = Number(req.params.id);
        pool.query('DELETE FROM my_users WHERE id = $1',[id],(err,result)=>
        {
            if(err)
            {
                throw err;
            }
            else
            {
                res.status(200).send("Deleted");
            }
        });
     
    }
  
}

export const userController = new controller();

            }
          
        }
        
        export const userController = new controller();
        
}

}

export const userController = new controller();
