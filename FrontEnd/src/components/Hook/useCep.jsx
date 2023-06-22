import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../CadastroUser/schema";

import { useQuery } from "react-query";
import api from "../../_config/apiCep";

const useCep = () => {
  const {register, handleSubmit, watch, formState: { errors }, setValue, } = useForm({resolver: zodResolver(schema),});

  const zipCode = watch('cep')

  const { data, error } = useQuery({
    queryKey: ["cep", zipCode],
    queryFn: async ({ queryKey }) => {
      const [key, cep] = queryKey;

      return cep.length === 8 && api(zipCode);
    },

  });
  if(data)
  setValue('cidade', data?.localidade)


  return { register, handleSubmit, watch, errors, setValue };
};

export default useCep;
