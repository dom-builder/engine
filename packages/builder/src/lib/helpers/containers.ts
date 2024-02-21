const containerConstructor = function () {
  const registers = new Map<string, any>();

  const register = (name: string, value: any) => {
    registers.set(name, value);
  };

  const resolve = (name: string) => {
    return registers.get(name);
  };

  return {
    register,
    resolve,
  };
};

const containers = containerConstructor();
const register = containers.register;
const resolver = containers.resolve;

export { register, resolver };
