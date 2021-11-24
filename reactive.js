const handler = {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    console.log('%c[reactive:get]', 'background: green; color: white;',target, key, res);
    track(target, key);
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    console.log('%c[reactive:set]', 'background: red; color: white;',target,  key, value);
    trigger(target, key);
    return res;
  }
}
function reactive(target) {
  return new Proxy(target, handler);
}

let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
  activeEffect();
}

const targetMap = new WeakMap();
function track(target, key) {
  let depsMap = targetMap.get(target);

  if(!depsMap){
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let deps  = depsMap.get(key);
  if(!deps){
    depsMap.set(key, deps  = new Set());
  }
  if(!deps.has(activeEffect)){
    console.log('%c[effect:register]', 'background: blue; color: white;', target, key, activeEffect);
    deps .add(key, activeEffect);
  }

}

function trigger(target, key) {
  const depsMap = targetMap.get(target);

  if(!depsMap) {
    return;
  }
  const deps = depsMap.get(key);
  if(!deps){
    return;
  }
  deps.forEach(effect => effect());
}
export { effect, trigger, reactive };