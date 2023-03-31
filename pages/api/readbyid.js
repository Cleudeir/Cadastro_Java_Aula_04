// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {id} = JSON.parse(req.body)
    console.log({id})
    const request = await fetch(`${process.env.SERVER_IP}/readbyid/${id}`,{
        headers:{
            "Content-Type": "application/json",
            "X-Custom-Header": "ProcessThisImmediately",
          },
        method: "GET"
      }
    )
    res.status(200).json(await request.json())
  }
  