import React from 'react'
import { Components } from '../../../components'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import Logo from "../../../assets/images/logo/insta.png";

import cls from "../../../assets/styles/register/Register.module.scss"
import { formsValidate } from '../../../helpers/forms'                      
import { REQUEST } from '../../../api'
import { Hooks } from '../../../hooks'
import { AuthPath } from '../../../services/path'
export default function Register() {

  const { actions } = Hooks.useLocations()



  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setError
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {

    const newData = {
      ...data,
      avatar: null
    }
    const request = REQUEST.CREATE_USER(newData)

       request
          .then(() => {
            actions.goToLogin()
          })
  };


  return (
    <Components.Container>
      <section className={cls.register_page}>
        <div className={cls.register_page_card}>
          <Components.Image src={Logo} />

          <h3>
             Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Username"
                err={errors}
                {...register("username", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="First name"
                err={errors}
                {...register("first_name", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.first_name ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Last name"
                err={errors}
                {...register("last_name", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.last_name ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Bio"
                err={errors}
                {...register("bio", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.bio ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="email"
                placeholder="Email"
                err={errors}
                {...register("email", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="password"
                placeholder="Password"
                err={errors}
                {...register("password", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="password"
                placeholder="Password Repeat"
                err={errors}
                {...register("password_repeat", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"}/>
            </Components.Forms.Divider>
          <p className={cls.useable_service_first}>
            Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628">Подробнее</a>
          </p>

          <p className={cls.useable_service_second}>
             Регистрируясь, вы принимаете наши <a href="https://www.facebook.com/privacy/policy">Условия, Политику конфиденциальности </a>и<a href="https://help.instagram.com/1896641480634370/"> Политику в отношении файлов cookie.</a>
          </p>
          <Components.Forms.Divider>
            <Components.Forms.AuthSubmit location={"Регистрация"}/>
          </Components.Forms.Divider>
          </form>
          
        </div>



        <div className={cls.register_page_bottomCard}>
          <p>
             Есть аккаунт? 
             <Link to={AuthPath.login}>
                Вход
             </Link>
          </p>
        </div>
      </section>
    </Components.Container>
  )
}
