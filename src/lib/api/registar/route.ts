import api from "@/lib/api/axios";

export async function Registration(req:{body:string,role:string}) {

    try{
        const res=await api.post(`/account/register/${req.role}`,req.body);
        return res.json(res);

    }
    catch(err){
        console.log(err);
    }

}