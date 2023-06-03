import { action, observable, makeObservable } from 'mobx';
import { ResponseDataRegT } from 'models/dataProfileStore';
import { ProfileT } from 'models/profile';
import Router from 'next/router';
import Cookies from 'js-cookie';
import RootStore from '../rootStore';

class ProfileSt {
  // `this` from rootstore passed to the constructor and we can
  // assign it to a variable accessible in this class called
  // `rootStore`. Therefore, we can access other store like
  // useStore for e.g (this.rootStore.profileStore)
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable profile: ProfileT = {
    email: '',
    confirmed: null,
    code: null,
    name: '',
    surname: '',
    patronymic: '',
    birthday: null,
    theme: (Cookies.get('xi.user-theme') as 'light' | 'dark' | 'system') ?? 'system',
  };

  @action setProfile = (item: string, value: string | number | boolean | null | Date) => {
    this.profile[item] = value;
  };

  @action setProfileSecond = (
    item: string,
    secondItem: string,
    value: string | number | boolean | null | Date,
  ) => {
    this.profile[item][secondItem] = value;
  };

  @action getProfile = (type = 'default') => {
    this.rootStore
      .fetchData(`${this.rootStore.url}/users/me/profile/`, 'GET')
      .then((data: ResponseDataRegT) => {
        if (data) {
          this.setProfileAll(data);

          if (type === 'login') {
            Router.push('/home');
          }
        }
      });
    setTimeout(() => {
      this.rootStore.uiSt.setLoading('loading', false);
    }, 500);
  };

  @action setProfileAll = (data: ResponseDataRegT) => {
    for (const key in data) {
      if (
        Object.prototype.hasOwnProperty.call(data, key) &&
        Object.prototype.hasOwnProperty.call(this.profile, key) &&
        key !== 'a'
      ) {
        if (key === 'birthday') {
          const value = new Date(data[key]);
          this.setProfile(key, value);
        } else {
          this.setProfile(key, data[key]);
        }
      }
    }
  };

  @action setProfileDefault = () => {
    this.profile = {
      email: '',
      confirmed: null,
      code: null,
      name: '',
      surname: '',
      patronymic: '',
      birthday: null,
      theme: (Cookies.get('xi.user-theme') as 'light' | 'dark' | 'system') ?? 'system',
    };
  };

  @action postProfile = (data, enqueueSnackbar, closeFn, reset, setError) => {
    console.log('postProfile', data);
    this.rootStore
      .fetchData(`${this.rootStore.url}/users/me/profile/`, 'POST', data)
      .then((answer: ResponseDataRegT) => {
        if (answer.a === 'Success') {
          this.rootStore.userSt.setUserAll(data);
          this.setProfileAll(data);

          if (closeFn) {
            closeFn();
          }
          enqueueSnackbar('Данные успешно сохранены', {
            variant: 'notification',
            autoHideDuration: 40000,
            bgcolor: 'ekaterinburg.100',
            title: 'Ваши данные успешно обновлены',
          });
        } else if (answer.a === 'Handle already in use') {
          enqueueSnackbar('Имя пользователя уже занято, используйте другое', {
            variant: 'notification',
            bgcolor: 'kurgur.100',
            autoHideDuration: 40000,
          });
          setError('handle', { type: 'unique' }, { shouldFocus: true });
        } else {
          closeFn();
          enqueueSnackbar(answer.a, {
            variant: 'notification',
            bgcolor: 'moscow.100',
            autoHideDuration: 40000,
          });
          reset();
        }
      });
  };
}

export default ProfileSt;
