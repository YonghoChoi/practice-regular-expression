var result = 'sports'.match(/.s/);
js.log(result);

result = 'sports'.match(/s./);
js.log(result);

result = "sop, sap, sac, sp".match(/s.p/g);
js.log(result);

result = 'sports'.match(/./);
js.log(result);

result = 'sports'.match(/./g);
js.log(result);
