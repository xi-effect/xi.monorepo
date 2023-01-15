import { action, observable, makeObservable } from 'mobx';
import { ResponseDataRegT } from 'models/dataProfileStore';
import { ProfileT } from 'models/profile';
import Router from 'next/router';
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
  };

  @action setProfile = (item: string, value: string | number | boolean) => {
    this.profile[item] = value;
  };

  @action setProfileSecond = (
    item: string,
    secondItem: string,
    value: string | number | boolean,
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
        this.setProfile(key, data[key]);
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
    };
  };

  @action postProfile = (data, enqueueSnackbar, closeFn, reset, setError) => {
    console.log('postProfile', data);
    this.rootStore
      .fetchData(`${this.rootStore.url}/users/me/profile/`, 'POST', data)
      .then((answer: ResponseDataRegT) => {
        console.log('answer', answer);
        if (answer.a === 'Success') {
          this.rootStore.userSt.setUserAll(data);
          this.setProfileAll(data);
          console.log('this.profile', this.profile);

          if (closeFn) {
            closeFn();
          }
          enqueueSnackbar('Данные успешно сохранены', {
            variant: 'success',
            autoHideDuration: 4000,
          });
        } else if (answer.a === 'Handle already in use') {
          enqueueSnackbar('Имя пользователя уже занято, используйте другое', {
            variant: 'warn',
            autoHideDuration: 4000,
          });
          setError('handle', { type: 'unique' }, { shouldFocus: true });
        } else {
          closeFn();
          enqueueSnackbar(answer.a, {
            variant: 'error',
            autoHideDuration: 4000,
          });
          reset();
        }
      });
  };
}

export default ProfileSt;
