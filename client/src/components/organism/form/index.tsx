import { FormWrapper } from "./style";
import LinkPrototype from "../../molecule/link";
import * as routes from "../../../routes";
import Typography from "../../atoms/typography";
import { useForm } from "react-hook-form";
import React from "react";

interface IFormProps {
  variant: string;
}
const Form: React.FC<IFormProps> = ({ variant }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    reset();
  };

  switch (variant) {
    case "registration":
      return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Typography variant={""}>Регистрация</Typography>
          <input
            {...register("email", { required: true })}
            placeholder={"Введите email"}
          />
          <div>
            {errors?.email && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>
          <input
            {...register("password1", { required: true })}
            type={"password"}
            placeholder={"Введите пароль"}
          />
          <div>
            {errors?.password1 && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input
            {...register("password2", { required: true })}
            type={"password"}
            placeholder={"Повторите пароль"}
          />
          <div>
            {errors?.password2 && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input type={"submit"} disabled={!isValid} />
        </FormWrapper>
      );
    case "autorization":
      return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Typography variant={""}>Авторизация</Typography>
          <input
            {...register("email", { required: true })}
            placeholder={"Введите email"}
          />
          <div>
            {errors?.email && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>
          <input
            {...register("password", { required: true })}
            placeholder={"Введите пароль"}
            type={"password"}
          />
          <div>
            {errors?.password && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>
          <input type={"submit"} disabled={!isValid} />
          <LinkPrototype
            variant={""}
            way={`/${routes.Registration}`}
            label={"Регистрация"}
          />
        </FormWrapper>
      );
    case "admin-panel":
      return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder={"Введите название товара"}
          />
          <div>
            {errors?.name && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input
            {...register("price", { required: true })}
            placeholder={"Введите цену товара"}
          />
          <div>
            {errors?.price && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input
            {...register("author", { required: true })}
            placeholder={"Введите автора"}
          />
          <div>
            {errors?.author && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input
            {...register("publisher", { required: true })}
            placeholder={"Введите издателя"}
          />
          <div>
            {errors?.publisher && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input type={"file"} placeholder={"Добавить изображение товара"} />
          <div>
            {errors?.publisher && (
              <Typography variant={"error"}>
                Поле обязательно к заполнению
              </Typography>
            )}
          </div>

          <input type={"submit"} disabled={!isValid} />
        </FormWrapper>
      );
    default:
      return <div></div>;
  }
};
export default Form;
