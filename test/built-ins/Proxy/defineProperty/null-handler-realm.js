// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
es6id: 9.5.6
description: >
  Throws a TypeError exception if handler is null (honoring the realm of the
  current execution context).
info: |
  1. Assert: IsPropertyKey(P) is true.
  2. Let handler be O.[[ProxyHandler]].
  3. If handler is null, throw a TypeError exception.
---*/

var OProxy = $.createRealm().global.Proxy;
var p = OProxy.revocable(Object.create(null), {});

p.revoke();

assert.throws(TypeError, function() {
  p.proxy.prop = null;
});
