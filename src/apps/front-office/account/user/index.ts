import cache from "@mongez/cache";
import {
  setCurrentUser,
  User as BaseUser,
  UserCacheDriverInterface,
  UserInterface,
} from "@mongez/user";

class User extends BaseUser implements UserInterface {
  /**
   * Cache driver
   */
  protected cacheDriver: UserCacheDriverInterface = cache;
  /**
   * {@inheritDoc}
   */
  public getCacheKey(): string {
    return "usr";
  }
}

const user: User = new User();

// boot the user
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;

// now you can directly import the user anywhere in the application using `import user from 'user';` thanks to the module alias
// @see `_moduleAliases` in package.json file
