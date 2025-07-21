import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const axiosGet = async () => {
      if (id) {
        const { data } = await axios.get(`/products/${id}`);

        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
        console.log(data);
      } else {
        console.log("ID do produto não encontrado");
      }
    };
    axiosGet();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.put(`/products/${id}`, {
        name,
        price,
        quantity,
      });
      setRedirect(true);
      console.log("O produto foi atualizado", result.data);
    } catch (error) {
      console.error("Deu algum erro:", error);
    }
  };

  if (redirect) return <Navigate to={"/"} />;

  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <div className="w-full max-w-2xl  flex flex-col ">
        <Card>
          <CardHeader>
            <CardTitle className={"text-2xl"}>Editar o Produto</CardTitle>
            <CardDescription>
              Coloque as novas informações do produto.
            </CardDescription>
            <CardAction>
              <Link to={"/"} className="cursor-pointer">
                <ArrowLeft />
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleEdit}>
              <div className="grid grid-cols-4 items-center ">
                <Label
                  htmlFor="name"
                  className={" flex justify-center items-center "}
                >
                  Nome
                </Label>
                <Input
                  id="name"
                  className={"col-span-3"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center ">
                <Label
                  htmlFor="price"
                  className={" flex justify-center items-center "}
                >
                  Preço
                </Label>
                <Input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={
                    "col-span-3 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center ">
                <Label
                  htmlFor="quantity"
                  className={" flex justify-center items-center "}
                >
                  Quantidade
                </Label>
                <Input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={
                    "col-span-3 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                  }
                />
              </div>
              <CardFooter className={"flex justify-center "}>
                <Button type="submit" className={"w-full max-w-68"}>
                  Salvar informações
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Edit;
