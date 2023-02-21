

import React from 'react';

import cls from "../../../assets/styles/profile/Profile.module.scss"
import { Components } from '../../../components';

import {AiOutlineSetting} from "react-icons/ai"

import NoneAvatar from "../../../assets/images/profile/noneAvatar.jpg";
import { Providers } from '../../../provider';
import { useParams } from 'react-router-dom';
import { REQUEST } from '../../../api';


export default function Profile() {
  const {user} = Providers.useAuth()
  const { id } = useParams();
  const [currentUser, setCurrentUser] = React.useState(null);
  const [avatar, setAvatar] = React.useState("");


  React.useEffect(() => {
    if(id) {
      const request = REQUEST.GET_SINGLE_USER(id)

      request
         .then(res => {
          const data = res.data;

          setCurrentUser(data)
         }) 
    } else {
      setCurrentUser(user)
    }
   }, [id, user]);

   React.useEffect(() => {
    if(!currentUser?.avatar) {
      setAvatar(NoneAvatar)
    } else {
      setAvatar(currentUser?.avatar)
    }
  }, [currentUser]);

  return (
    <Components.Container>
      <section className={cls.profile_wrapper}>
          <section className={cls.profile_wrapper_top}>
            <div>
              <label htmlFor="file">
                <Components.Image src={avatar} />
                <input type="file" id='file' />
              </label>
            </div>
            <div>
              <section className={cls.profile_wrapper_top_name}>
                <p>{currentUser?.username}</p>
                <button>Редактировать профиль</button>
                <AiOutlineSetting />
              </section>
              <section className={cls.profile_wrapper_top_follow}>
                <ul>
                  <li>
                    0 публикаций
                  </li>
                  <li>
                    {currentUser?.subscribers} подписчиков
                  </li>
                  <li>
                    {currentUser?.subscriptions} подписок
                  </li>
                </ul>
              </section>
              <section className={cls.profile_wrapper_top_login}>
                <h4>{currentUser?.first_name} {currentUser?.last_name}</h4>
              </section>
              <section className={cls.profile_wrapper_top_bio}> 
                <p>
                  {currentUser?.bio}
                </p>
              </section>
            </div>
          </section>
          <section className={cls.profile_wrapper_bottom}>

          </section>
      </section>
    </Components.Container>
  )
}
