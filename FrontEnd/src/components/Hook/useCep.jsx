import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../CadastroUser/schema";

import { useQuery } from "react-query";
import api from "../../_config/apiCep";

const setData = (data, setValue) => {
  console.log(data)
  setValue('address.cep', data?.cep)
  setValue('address.cidade', data?.localidade)
  setValue('address.Estado', data?.uf)
  setValue('address.Bairro', data?.bairro)
}

const useCep = () => {
  const {register, handleSubmit, watch, formState: { errors }, setValue, } = useForm({resolver: zodResolver(schema),});

  const zipCode = watch('cep')
console.log(zipCode)
  const { data, error } = useQuery({
    queryKey: ["cep", zipCode],
    queryFn: async ({ queryKey }) => {
      const [key, cep] = queryKey;

      return cep.length === 8 && api(zipCode);
    },

  });
  
  data && setData(data, setValue)



  return { register, handleSubmit, watch, errors, setValue };
};

export default useCep;
