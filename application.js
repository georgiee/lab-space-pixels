webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.run(); //import app01 from "./app01";
	//app01.run();

	//import app02 from "./app02";
	//app02.run();

	//import app03 from "./app03";
	//app03.run();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spacepixels = __webpack_require__(2);

	var _spacepixels2 = _interopRequireDefault(_spacepixels);

	var _cameraPathFactory = __webpack_require__(171);

	var _cameraPathFactory2 = _interopRequireDefault(_cameraPathFactory);

	var _utils = __webpack_require__(131);

	var utils = _interopRequireWildcard(_utils);

	var _bufferPingPong = __webpack_require__(130);

	var _bufferPingPong2 = _interopRequireDefault(_bufferPingPong);

	var _debug = __webpack_require__(89);

	var _debug2 = _interopRequireDefault(_debug);

	var _preloader = __webpack_require__(174);

	var _preloader2 = _interopRequireDefault(_preloader);

	var _data = __webpack_require__(190);

	var data = _interopRequireWildcard(_data);

	var _gui = __webpack_require__(192);

	var _gui2 = _interopRequireDefault(_gui);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var spacepixels = void 0,
	    world = void 0,
	    camera = void 0;

	var SIMULATION_SIZE = 200;

	_debug2.default.enable();

	function create() {
	  spacepixels = new _spacepixels2.default(SIMULATION_SIZE);
	  world = spacepixels.world;
	  camera = world.camera;

	  _gui2.default.create(spacepixels);
	  //gui.runFirst();
	}

	exports.default = {
	  run: function run() {
	    _preloader2.default.load(create);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _debug = __webpack_require__(89);

	var _debug2 = _interopRequireDefault(_debug);

	var _world = __webpack_require__(92);

	var _world2 = _interopRequireDefault(_world);

	var _simulator = __webpack_require__(128);

	var _simulator2 = _interopRequireDefault(_simulator);

	var _particles = __webpack_require__(169);

	var _particles2 = _interopRequireDefault(_particles);

	var _events = __webpack_require__(99);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spacepixels = function (_Emitter) {
	  (0, _inherits3.default)(Spacepixels, _Emitter);

	  function Spacepixels(size) {
	    (0, _classCallCheck3.default)(this, Spacepixels);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spacepixels).call(this));

	    _this._size = size;
	    _this.handleFixedStep = _this.handleFixedStep.bind(_this);
	    _this.init();
	    return _this;
	  }

	  (0, _createClass3.default)(Spacepixels, [{
	    key: 'handleFixedStep',
	    value: function handleFixedStep(dt, time) {
	      this.simulator.step(dt, time);
	      this.emit('step', dt, time);

	      this.particles.update(this.simulator.positionBuffer, time);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.initWorld();
	      this.initSimulator();
	      this.initParticles();
	    }
	  }, {
	    key: 'initWorld',
	    value: function initWorld() {
	      var _this2 = this;

	      var world = _world2.default.create(_debug2.default.enable());
	      world.camera.position.set(-1, 1, 4);
	      world.camera.lookAt(world.scene.position);

	      world.on('fixedstep', this.handleFixedStep);
	      world.on('tick', function (dt) {
	        return _this2.emit('tick');
	      });

	      this.world = world;
	    }
	  }, {
	    key: 'initSimulator',
	    value: function initSimulator() {
	      this.simulator = _simulator2.default.create(this.world.renderer, this._size);
	    }
	  }, {
	    key: 'initParticles',
	    value: function initParticles() {
	      var particles = new _particles2.default(this._size);
	      this.world.scene.add(particles);

	      this.particles = particles;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    }
	  }]);
	  return Spacepixels;
	}(_events2.default);

	exports.default = Spacepixels;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(16).Object.getPrototypeOf;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(6)
	  , $getPrototypeOf = __webpack_require__(8);

	__webpack_require__(14)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(9)
	  , toObject    = __webpack_require__(6)
	  , IE_PROTO    = __webpack_require__(10)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(11)('keys')
	  , uid    = __webpack_require__(13);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15)
	  , core    = __webpack_require__(16)
	  , fails   = __webpack_require__(25);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(31);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(36);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(65);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(60);
	module.exports = __webpack_require__(64).f('iterator');

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(39)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(41)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(42)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(43)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(9)
	  , Iterators      = __webpack_require__(44)
	  , $iterCreate    = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(58)
	  , getPrototypeOf = __webpack_require__(8)
	  , ITERATOR       = __webpack_require__(59)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(58)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(59)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(10)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(48);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(56);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(9)
	  , toIObject    = __webpack_require__(50)
	  , arrayIndexOf = __webpack_require__(53)(false)
	  , IE_PROTO     = __webpack_require__(10)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50)
	  , toLength  = __webpack_require__(54)
	  , toIndex   = __webpack_require__(55);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(9)
	  , TAG = __webpack_require__(59)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(11)('wks')
	  , uid        = __webpack_require__(13)
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var global        = __webpack_require__(12)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(44)
	  , TO_STRING_TAG = __webpack_require__(59)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(62)
	  , step             = __webpack_require__(63)
	  , Iterators        = __webpack_require__(44)
	  , toIObject        = __webpack_require__(50);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(41)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(59);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	module.exports = __webpack_require__(16).Symbol;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(9)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(43)
	  , META           = __webpack_require__(68).KEY
	  , $fails         = __webpack_require__(25)
	  , shared         = __webpack_require__(11)
	  , setToStringTag = __webpack_require__(58)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(59)
	  , wksExt         = __webpack_require__(64)
	  , wksDefine      = __webpack_require__(69)
	  , keyOf          = __webpack_require__(70)
	  , enumKeys       = __webpack_require__(71)
	  , isArray        = __webpack_require__(74)
	  , anObject       = __webpack_require__(21)
	  , toIObject      = __webpack_require__(50)
	  , toPrimitive    = __webpack_require__(27)
	  , createDesc     = __webpack_require__(28)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(75)
	  , $GOPD          = __webpack_require__(77)
	  , $DP            = __webpack_require__(20)
	  , $keys          = __webpack_require__(48)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(76).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(73).f  = $propertyIsEnumerable;
	  __webpack_require__(72).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(42)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(13)('meta')
	  , isObject = __webpack_require__(22)
	  , has      = __webpack_require__(9)
	  , setDesc  = __webpack_require__(20).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(25)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(16)
	  , LIBRARY        = __webpack_require__(42)
	  , wksExt         = __webpack_require__(64)
	  , defineProperty = __webpack_require__(20).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(48)
	  , toIObject = __webpack_require__(50);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48)
	  , gOPS    = __webpack_require__(72)
	  , pIE     = __webpack_require__(73);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 73 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50)
	  , gOPN      = __webpack_require__(76).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(49)
	  , hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(73)
	  , createDesc     = __webpack_require__(28)
	  , toIObject      = __webpack_require__(50)
	  , toPrimitive    = __webpack_require__(27)
	  , has            = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69)('asyncIterator');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69)('observable');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(82);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(86);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(15);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(85).set});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(22)
	  , anObject = __webpack_require__(21);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(17)(Function.call, __webpack_require__(77).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	var $Object = __webpack_require__(16).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dat = __webpack_require__(90);

	var _dat2 = _interopRequireDefault(_dat);

	var _statsJs = __webpack_require__(91);

	var _statsJs2 = _interopRequireDefault(_statsJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stats = new _statsJs2.default();
	var gui = new dat.GUI();
	var params = {};

	var obj = {
	  enable: enable,
	  stats: stats, gui: gui, params: params
	};

	function enable() {
	  stats.domElement.style.position = 'absolute';
	  stats.domElement.style.left = '0px';
	  stats.domElement.style.top = '0px';

	  document.body.appendChild(stats.domElement);

	  return obj;
	}

	exports.default = obj;

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = dat.GUI;

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(THREE) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(94);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(99);

	var _events2 = _interopRequireDefault(_events);

	var _webglContext = __webpack_require__(100);

	var _webglContext2 = _interopRequireDefault(_webglContext);

	var _observerCamera = __webpack_require__(102);

	var _observerCamera2 = _interopRequireDefault(_observerCamera);

	var _debounce = __webpack_require__(104);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _ticker = __webpack_require__(111);

	var _ticker2 = _interopRequireDefault(_ticker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contextAttributes = {
	  stencil: false,
	  antialias: false,
	  premultipliedAlpha: true,
	  preserveDrawingBuffer: false,
	  logarithmicDepthBuffer: false,
	  alpha: true,
	  depth: true
	};

	var createOrbitViewer = __webpack_require__(118)(THREE);

	var World = function (_Emitter) {
	  (0, _inherits3.default)(World, _Emitter);

	  function World(debugTool) {
	    (0, _classCallCheck3.default)(this, World);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(World).call(this));

	    _this.render = _this.render.bind(_this);
	    _this._debug = debugTool;

	    _this.init();
	    return _this;
	  }

	  (0, _createClass3.default)(World, [{
	    key: 'run',
	    value: function run() {
	      this.timer.start();
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      var gl = (0, _webglContext2.default)();
	      document.body.appendChild(gl.canvas);

	      this.timer = new _ticker2.default();
	      this.timer.on("tick", this.render);
	      this.timer.on("fixed-tick", function (dt, time) {
	        return _this2.emit('fixedstep', dt, time);
	      });

	      this.setup(gl, window.innerWidth, window.innerHeight);
	      this.handleResize(window.innerWidth, window.innerHeight);
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize(width, height) {
	      if (!this._renderer) return;

	      this.renderer.setSize(width, height);
	      this.camera.aspect = width / height;
	      this.camera.updateProjectionMatrix();

	      this.emit('resize', width, height);
	    }
	  }, {
	    key: 'setup',
	    value: function setup(gl, width, height) {
	      var _this3 = this;

	      this._camera = _observerCamera2.default.create(gl.canvas);

	      this._scene = new THREE.Scene();
	      this._renderer = new THREE.WebGLRenderer((0, _extends3.default)({}, contextAttributes, {
	        canvas: gl.canvas
	      }));

	      this._renderer.autoClear = true;
	      this._renderer.setClearColor(0, 1);
	      //this._renderer.autoClearColor = false;;

	      this._canvas = gl.canvas;
	      this._canvas.width = width;
	      this._canvas.height = height;

	      var axisHelper = new THREE.AxisHelper(2);
	      this.scene.add(axisHelper);

	      window.addEventListener('resize', (0, _debounce2.default)(function () {
	        _this3.handleResize(window.innerWidth, window.innerHeight);
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render(dt) {
	      if (this._debug) {
	        this._debug.stats.begin();
	      }

	      this.emit('tick', dt);

	      this._renderer.render(this._scene, this._camera);

	      if (this._debug) {
	        this._debug.stats.end();
	      }

	      this.emit('render', dt);
	    }
	  }, {
	    key: 'scene',
	    get: function get() {
	      return this._scene;
	    }
	  }, {
	    key: 'canvas',
	    get: function get() {
	      return this._canvas;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._renderer;
	    }
	  }, {
	    key: 'camera',
	    get: function get() {
	      return this._camera;
	    }
	  }, {
	    key: 'controls',
	    get: function get() {
	      return this._controls;
	    }
	  }]);
	  return World;
	}(_events2.default);

	exports.default = {
	  create: function create(debugTool) {
	    var world = new World(debugTool);
	    world.run();

	    return world;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ },
/* 93 */,
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(95);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	module.exports = __webpack_require__(16).Object.assign;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(98)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(72)
	  , pIE      = __webpack_require__(73)
	  , toObject = __webpack_require__(6)
	  , IObject  = __webpack_require__(51)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(25)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 99 */,
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getContext = __webpack_require__(101)

	module.exports = function getWebGLContext (opt) {
	  return getContext('webgl', opt)
	}


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = getCanvasContext
	function getCanvasContext (type, opts) {
	  if (typeof type !== 'string') {
	    throw new TypeError('must specify type string')
	  }

	  opts = opts || {}

	  if (typeof document === 'undefined' && !opts.canvas) {
	    return null // check for Node
	  }

	  var canvas = opts.canvas || document.createElement('canvas')
	  if (typeof opts.width === 'number') {
	    canvas.width = opts.width
	  }
	  if (typeof opts.height === 'number') {
	    canvas.height = opts.height
	  }

	  var attribs = opts
	  var gl
	  try {
	    var names = [ type ]
	    // prefix GL contexts
	    if (type.indexOf('webgl') === 0) {
	      names.push('experimental-' + type)
	    }

	    for (var i = 0; i < names.length; i++) {
	      gl = canvas.getContext(names[i], attribs)
	      if (gl) return gl
	    }
	  } catch (e) {
	    gl = null
	  }
	  return (gl || null) // ensure null on fail
	}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeOrbitControls = __webpack_require__(103);

	var _threeOrbitControls2 = _interopRequireDefault(_threeOrbitControls);

	var _events = __webpack_require__(99);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OrbitControls = (0, _threeOrbitControls2.default)(_three2.default);

	var controls = void 0;

	var camera = new _three2.default.PerspectiveCamera(70, 1, 0.1, 10000);
	//camera.position.z = 150;

	var obj = {
	  enabled: false,
	  camera: camera, controls: controls,

	  create: function create(domElement) {
	    if (obj.controls) return;

	    controls = new OrbitControls(camera, domElement);
	    controls.enableDamping = true;
	    //controls.dampingFactor = 0.25;
	    controls.enableZoom = true;

	    obj.controls = controls;

	    return camera;
	  },

	  resize: function resize(width, height) {
	    camera.aspect = width / height;
	    camera.updateProjectionMatrix();
	  },

	  update: function update() {
	    controls.update();
	  }
	};

	exports.default = obj;

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(105),
	    now = __webpack_require__(106),
	    toNumber = __webpack_require__(107);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	function now() {
	  return Date.now();
	}

	module.exports = now;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(108),
	    isObject = __webpack_require__(105),
	    isSymbol = __webpack_require__(109);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(105);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(110);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _rafLoop = __webpack_require__(112);

	var _rafLoop2 = _interopRequireDefault(_rafLoop);

	var _events = __webpack_require__(99);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FIXED_TIME_STEP = 0.02;
	var FIXED_TIME_STEP_MAX = 0.2;

	var Ticker = function (_Emitter) {
	  (0, _inherits3.default)(Ticker, _Emitter);

	  function Ticker() {
	    (0, _classCallCheck3.default)(this, Ticker);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Ticker).call(this));

	    _this._time = _this._remainder = 0;
	    _this._engine = (0, _rafLoop2.default)(_this.update.bind(_this));
	    return _this;
	  }

	  (0, _createClass3.default)(Ticker, [{
	    key: 'start',
	    value: function start() {
	      this._engine.start();
	    }
	  }, {
	    key: 'update',
	    value: function update(dt) {
	      var dt = dt / 1000;
	      this._time += dt;
	      this._remainder += dt;

	      // cap remainder
	      if (this._remainder > FIXED_TIME_STEP_MAX) {
	        this._remainder = FIXED_TIME_STEP_MAX;
	      }

	      // loop remainder
	      while (this._remainder > FIXED_TIME_STEP) {
	        this.fixedTick(FIXED_TIME_STEP, this._time);
	        this._remainder -= FIXED_TIME_STEP;
	      }

	      this.tick(dt);
	    }
	  }, {
	    key: 'fixedTick',
	    value: function fixedTick(dt, time) {
	      this.emit('fixed-tick', dt, time);
	    }
	  }, {
	    key: 'tick',
	    value: function tick(dt) {
	      this.emit('tick', dt);
	    }
	  }]);
	  return Ticker;
	}(_events2.default);

	exports.default = Ticker;

/***/ },
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Simulator = undefined;

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(99);

	var _events2 = _interopRequireDefault(_events);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _shaderPass = __webpack_require__(129);

	var _shaderPass2 = _interopRequireDefault(_shaderPass);

	var _bufferPingPong = __webpack_require__(130);

	var _bufferPingPong2 = _interopRequireDefault(_bufferPingPong);

	var _utils = __webpack_require__(131);

	var utils = _interopRequireWildcard(_utils);

	var _simulatePosition = __webpack_require__(134);

	var _simulatePosition2 = _interopRequireDefault(_simulatePosition);

	var _simulateVelocity = __webpack_require__(137);

	var _simulateVelocity2 = _interopRequireDefault(_simulateVelocity);

	var _passThrough = __webpack_require__(138);

	var _passThrough2 = _interopRequireDefault(_passThrough);

	var _flagManager = __webpack_require__(139);

	var _flagManager2 = _interopRequireDefault(_flagManager);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var positionMaterial = _simulatePosition2.default.create();
	var velocityMaterial = _simulateVelocity2.default.create();
	var passThroughMaterial = _passThrough2.default.create();

	function create(renderer, size) {
	  var simulator = new Simulator(renderer, size);
	  simulator.reset();

	  return simulator;
	}

	exports.default = {
	  create: create
	};

	var Simulator = exports.Simulator = function (_Emitter) {
	  (0, _inherits3.default)(Simulator, _Emitter);

	  function Simulator(renderer, size) {
	    (0, _classCallCheck3.default)(this, Simulator);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Simulator).call(this));

	    _this._renderer = renderer;
	    _this._size = size;

	    _this.init();
	    _this._velocityFlags = _flagManager2.default.create(_this._velocityPass.material, 'MODE_FLAG_');
	    _this._positionFlags = _flagManager2.default.create(_this._positionPass.material, 'MODE_FLAG_');
	    return _this;
	  }

	  (0, _createClass3.default)(Simulator, [{
	    key: 'stepPosition',
	    value: function stepPosition(dt, time) {
	      var positionUniforms = this._positionPass.material.uniforms;

	      positionUniforms.texturePosition.value = this._position.source;
	      positionUniforms.textureVelocity.value = this._velocity.source;

	      if (this._currentDestination) {
	        positionUniforms.textureTargetPosition.value = this._currentDestination.source;
	      }

	      positionUniforms.delta.value = dt;
	      positionUniforms.time.value = time;
	      this._positionPass.render(this._renderer, this._position.write);
	    }
	  }, {
	    key: 'stepVelocity',
	    value: function stepVelocity(dt, time) {
	      var velocityUniforms = this._velocityPass.material.uniforms;

	      velocityUniforms.texturePosition.value = this._position.source;
	      velocityUniforms.textureVelocity.value = this._velocity.source;

	      if (this._currentDestination) {
	        velocityUniforms.textureTargetPosition.value = this._currentDestination.source;
	      }

	      velocityUniforms.delta.value = dt;
	      velocityUniforms.time.value = time;

	      this._velocityPass.render(this._renderer, this._velocity.write);
	    }
	  }, {
	    key: 'step',
	    value: function step(dt, time) {
	      this.stepPosition(dt, time);
	      this.stepVelocity(dt, time);

	      this.emit('step', this._position.write, time);

	      this._position.swap();
	      this._velocity.swap();
	    }
	  }, {
	    key: 'clearTargetPositions',
	    value: function clearTargetPositions() {
	      delete this._currentDestination;
	    }
	  }, {
	    key: 'setTargetPositions',
	    value: function setTargetPositions(value) {
	      //pinpong
	      this._currentDestination = value;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var dtPositionTexture = utils.generatePositionTexture(this._size);
	      var dtVelocityTexture = utils.generateVelocityTexture(this._size);

	      this.setPosition(this._renderer, dtPositionTexture);
	      this.setVelocity(this._renderer, dtVelocityTexture);

	      this._velocityPass.material.uniforms.textureTargetPosition.value = this._position.source;
	      this._positionPass.material.uniforms.textureTargetPosition.value = this._position.source;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      var dtPositionTexture = utils.generateTextPoints('hello', this._size, this._size * this._size / 4);
	      var dtVelocityTexture = utils.generateVelocityTexture(this._size);

	      this.setPosition(this._renderer, dtPositionTexture);
	      this.setVelocity(this._renderer, dtVelocityTexture);
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(renderer, dataTexture) {
	      this._passThroughPass.material.uniforms.oldTexture.value = this._position.write;
	      this._passThroughPass.material.uniforms.texture.value = dataTexture;
	      this._passThroughPass.render(renderer, this._position.source);
	    }
	  }, {
	    key: 'setVelocity',
	    value: function setVelocity(renderer, dataTexture) {
	      var dtVelocityTexture = utils.generateVelocityTexture(this._size);
	      this._passThroughPass.material.uniforms.texture.value = dataTexture;
	      this._passThroughPass.render(renderer, this._velocity.source);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var target1 = void 0,
	          target2 = void 0;

	      target1 = this.createRenderTarget(this._size, 'positionTarget1');
	      target2 = this.createRenderTarget(this._size, 'positionTarget2');
	      this._position = new _bufferPingPong2.default(target1, target2);

	      target1 = this.createRenderTarget(this._size, 'velocityTarget1');
	      target2 = this.createRenderTarget(this._size, 'velocityTarget2');
	      this._velocity = new _bufferPingPong2.default(target1, target2);

	      this._passThroughPass = new _shaderPass2.default(passThroughMaterial);
	      this._positionPass = new _shaderPass2.default(positionMaterial);
	      this._velocityPass = new _shaderPass2.default(velocityMaterial);
	    }
	  }, {
	    key: 'createRenderTarget',
	    value: function createRenderTarget(size, name) {
	      var target = new _three2.default.WebGLRenderTarget(size, size, {
	        minFilter: _three2.default.NearestFilter,
	        magFilter: _three2.default.NearestFilter,
	        format: _three2.default.RGBAFormat,
	        type: _three2.default.FloatType,
	        depthBuffer: false,
	        stencilBuffer: false
	      });

	      target.texture.generateMipmaps = false;
	      target.name = name;

	      return target;
	    }
	  }, {
	    key: 'velocityFlags',
	    get: function get() {
	      return this._velocityFlags;
	    }
	  }, {
	    key: 'positionFlags',
	    get: function get() {
	      return this._positionFlags;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    }
	  }, {
	    key: 'positionBuffer',
	    get: function get() {
	      return this._position.source;
	    }
	  }, {
	    key: 'velocityUniforms',
	    get: function get() {
	      return this._velocityPass.material.uniforms;
	    }
	  }]);
	  return Simulator;
	}(_events2.default);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ShaderPass = function () {
	  function ShaderPass(shader) {
	    (0, _classCallCheck3.default)(this, ShaderPass);

	    if (shader instanceof _three2.default.Material) {
	      this.material = shader;
	    } else {
	      this.material = this.createShaderMaterial(shader);
	    }

	    this.init();
	  }

	  (0, _createClass3.default)(ShaderPass, [{
	    key: "init",
	    value: function init() {
	      this.camera = new _three2.default.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	      this.scene = new _three2.default.Scene();

	      this.quad = new _three2.default.Mesh(new _three2.default.PlaneBufferGeometry(2, 2), null);
	      this.quad.material = this.material;
	      this.scene.add(this.quad);
	      this.clear = false;
	    }
	  }, {
	    key: "createShaderMaterial",
	    value: function createShaderMaterial(shader) {
	      return new _three2.default.ShaderMaterial({
	        defines: cloneDefines(shader.defines),
	        uniforms: _three2.default.UniformsUtils.clone(shader.uniforms),
	        vertexShader: shader.vertexShader,
	        fragmentShader: shader.fragmentShader
	      });
	    }
	  }, {
	    key: "render",
	    value: function render(renderer, writeBuffer) {
	      //console.log('render')
	      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
	    }
	  }]);
	  return ShaderPass;
	}();

	exports.default = ShaderPass;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BufferPingPong = function () {
	  function BufferPingPong(buffer1, buffer2) {
	    (0, _classCallCheck3.default)(this, BufferPingPong);

	    this._bufferSource = this._buffer1 = buffer1;
	    this._bufferWrite = this._buffer2 = buffer2;
	  }

	  (0, _createClass3.default)(BufferPingPong, [{
	    key: "swap",
	    value: function swap() {
	      this._swapped = !this._swapped;

	      if (this._swapped) {

	        this._bufferSource = this._buffer2;
	        this._bufferWrite = this._buffer1;
	      } else {

	        this._bufferSource = this._buffer1;
	        this._bufferWrite = this._buffer2;
	      }
	    }
	  }, {
	    key: "source",
	    get: function get() {
	      return this._bufferSource;
	    }
	  }, {
	    key: "write",
	    get: function get() {
	      return this._bufferWrite;
	    }
	  }]);
	  return BufferPingPong;
	}();

	exports.default = BufferPingPong;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseGeometryJson = parseGeometryJson;
	exports.createMeshFromJson = createMeshFromJson;
	exports.getClearTexture = getClearTexture;
	exports.generatePositionTexture = generatePositionTexture;
	exports.generateTextPoints = generateTextPoints;
	exports.generateGeometryPoints = generateGeometryPoints;
	exports.generateVelocityTexture = generateVelocityTexture;
	exports.createRenderTarget = createRenderTarget;

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _GeometryUtils = __webpack_require__(132);

	var _GeometryUtils2 = _interopRequireDefault(_GeometryUtils);

	var _helvetiker_regularTypeface = __webpack_require__(133);

	var _helvetiker_regularTypeface2 = _interopRequireDefault(_helvetiker_regularTypeface);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var geometryParser = new _three2.default.JSONLoader().parse;

	function parseGeometryJson(json) {
	  var model = geometryParser(json);
	  return model.geometry;
	}

	var defaultPointGenerator = function defaultPointGenerator() {
	  var wValue = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];


	  return function (data, k, count) {
	    var bounds = 10.0;
	    var x = Math.random() * bounds - bounds / 2;
	    var y = Math.random() * bounds - bounds / 2;
	    var z = Math.random() * bounds - bounds / 2;

	    data[k + 0] = x;
	    data[k + 1] = y;
	    data[k + 2] = z;
	    data[k + 3] = wValue;
	  };
	};
	var longRow = function longRow(data, k, count) {
	  var bounds = 4.0;
	  var x = k / count * 4;
	  var y = k / count * 4;
	  var z = Math.random() * bounds - bounds / 2;

	  data[k + 0] = x;
	  data[k + 1] = y;
	  data[k + 2] = z;
	  data[k + 3] = 1;
	};

	function createMeshFromJson(json) {
	  var scale = arguments.length <= 1 || arguments[1] === undefined ? 1.0 : arguments[1];

	  var mesh = new _three2.default.Mesh(parseGeometryJson(json), new _three2.default.MeshNormalMaterial());

	  mesh.geometry.center();
	  mesh.scale.setScalar(scale);
	  return mesh;
	}

	function generateRandomPoints(count, generator) {
	  var data = new Float32Array(count * 4);

	  for (var k = 0, kl = data.length; k < kl; k += 4) {

	    generator(data, k, count);
	  }

	  return data;
	}

	function getClearTexture(size) {
	  var a = generateRandomPoints(size * size, defaultPointGenerator(0));
	  var texture = new _three2.default.DataTexture(a, size, size, _three2.default.RGBAFormat, _three2.default.FloatType);
	  texture.needsUpdate = true;

	  return texture;
	}
	function generatePositionTexture(size) {
	  var a = generateRandomPoints(size * size, defaultPointGenerator(1));
	  //var a = generateRandomPoints(size * size, longRow);

	  var texture = new _three2.default.DataTexture(a, size, size, _three2.default.RGBAFormat, _three2.default.FloatType);
	  texture.needsUpdate = true;

	  return texture;
	}

	function generateTextPoints(text, size, pointCount) {
	  if (!pointCount) {
	    pointCount = size * size / 2; // use half of all points per default
	  }
	  var font = new _three2.default.Font(JSON.parse(_helvetiker_regularTypeface2.default.substring(65, _helvetiker_regularTypeface2.default.length - 2)));

	  var textGeo = new _three2.default.TextGeometry(text, {
	    size: 1,
	    height: 0.5,
	    curveSegments: 0,

	    font: font,
	    weight: "bold",
	    style: "normal",

	    bevelThickness: 2,
	    bevelSize: 5,
	    bevelEnabled: false

	  });

	  textGeo.center();
	  textGeo.applyMatrix(new _three2.default.Matrix4().makeTranslation(0, 1, 0)); //move up a little

	  var data = generateRandomPoints(size * size, defaultPointGenerator(0)); //assign 0 to w so that the pass  through shader discard the position and uses the old one isntead

	  var points = _three2.default.GeometryUtils.randomPointsInGeometry(textGeo, pointCount);

	  for (var i = 0, j = 0, l = Math.min(points.length, data.length); j < l; i += 4, j += 1) {

	    data[i] = points[j].x;
	    data[i + 1] = points[j].y;
	    data[i + 2] = points[j].z;
	    data[i + 3] = 1.0;
	  }

	  var texture = new _three2.default.DataTexture(data, size, size, _three2.default.RGBAFormat, _three2.default.FloatType); // was RGB format. changed to RGBA format. see discussion in #8415 / #8450
	  texture.needsUpdate = true;

	  return texture;
	}

	function generateGeometryPoints(geometry, size, pointCount) {
	  if (!pointCount) {
	    pointCount = size * size / 2; // use half of all points per default
	  }

	  //geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -0.9, 0, 0.2 ) );

	  var data = generateRandomPoints(size * size, defaultPointGenerator(0)); //assign 0 to w so that the pass  through shader discard the position and uses the old one isntead

	  var points = _three2.default.GeometryUtils.randomPointsInGeometry(geometry, pointCount);

	  for (var i = 0, j = 0, l = Math.min(points.length, data.length); j < l; i += 4, j += 1) {

	    data[i] = points[j].x;
	    data[i + 1] = points[j].y;
	    data[i + 2] = points[j].z;
	    data[i + 3] = 1.0;
	  }

	  var texture = new _three2.default.DataTexture(data, size, size, _three2.default.RGBAFormat, _three2.default.FloatType); // was RGB format. changed to RGBA format. see discussion in #8415 / #8450
	  texture.needsUpdate = true;

	  return texture;
	}

	function generateVelocityTexture(size) {

	  var a = new Float32Array(size * size * 4);

	  for (var k = 0, kl = a.length; k < kl; k += 4) {

	    var x = 0.1 * (Math.random() - 0.5);
	    var y = 0.1 * (Math.random() - 0.5);
	    var z = 0.1 * (Math.random() - 0.5);

	    a[k + 0] = x;
	    a[k + 1] = y;
	    a[k + 2] = z;
	    a[k + 3] = 1;
	  }

	  var texture = new _three2.default.DataTexture(a, size, size, _three2.default.RGBAFormat, _three2.default.FloatType); // was RGB format. changed to RGBA format. see discussion in #8415 / #8450
	  texture.needsUpdate = true;

	  return texture;
	}

	function createRenderTarget(size) {
	  var name = arguments.length <= 1 || arguments[1] === undefined ? 'particleTarget' : arguments[1];

	  var target = new _three2.default.WebGLRenderTarget(size, size, {
	    minFilter: _three2.default.NearestFilter,
	    magFilter: _three2.default.NearestFilter,
	    format: _three2.default.RGBAFormat,
	    type: _three2.default.FloatType,
	    depthBuffer: false,
	    stencilBuffer: false
	  });

	  target.texture.generateMipmaps = false;
	  target.name = name;

	  return target;
	}

	/*



	Align plane to normal:
	var nor = pos.clone().sub(camera.position).normalize();

	  var plane = new THREE.Plane(
	      nor, -nor.x*pos.x - nor.y*pos.y - nor.z*pos.z
	  );
	var quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1), plane.normal);
	this.plane.setRotationFromQuaternion(quaternion);
	 */

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(93);

	'use strict';

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.GeometryUtils = {

		// Merge two geometries or geometry and geometry from object (using object's transform)

		merge: function merge(geometry1, geometry2, materialIndexOffset) {

			console.warn('THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.');

			var matrix;

			if (geometry2 instanceof THREE.Mesh) {

				geometry2.matrixAutoUpdate && geometry2.updateMatrix();

				matrix = geometry2.matrix;
				geometry2 = geometry2.geometry;
			}

			geometry1.merge(geometry2, matrix, materialIndexOffset);
		},

		// Get random point in triangle (via barycentric coordinates)
		// 	(uniform distribution)
		// 	http://www.cgafaq.info/wiki/Random_Point_In_Triangle

		randomPointInTriangle: function () {

			var vector = new THREE.Vector3();

			return function (vectorA, vectorB, vectorC) {

				var point = new THREE.Vector3();

				var a = Math.random();
				var b = Math.random();

				if (a + b > 1) {

					a = 1 - a;
					b = 1 - b;
				}

				var c = 1 - a - b;

				point.copy(vectorA);
				point.multiplyScalar(a);

				vector.copy(vectorB);
				vector.multiplyScalar(b);

				point.add(vector);

				vector.copy(vectorC);
				vector.multiplyScalar(c);

				point.add(vector);

				return point;
			};
		}(),

		// Get random point in face (triangle)
		// (uniform distribution)

		randomPointInFace: function randomPointInFace(face, geometry) {

			var vA, vB, vC;

			vA = geometry.vertices[face.a];
			vB = geometry.vertices[face.b];
			vC = geometry.vertices[face.c];

			return THREE.GeometryUtils.randomPointInTriangle(vA, vB, vC);
		},

		// Get uniformly distributed random points in mesh
		// 	- create array with cumulative sums of face areas
		//  - pick random number from 0 to total area
		//  - find corresponding place in area array by binary search
		//	- get random point in face

		randomPointsInGeometry: function randomPointsInGeometry(geometry, n) {

			var face,
			    i,
			    faces = geometry.faces,
			    vertices = geometry.vertices,
			    il = faces.length,
			    totalArea = 0,
			    cumulativeAreas = [],
			    vA,
			    vB,
			    vC;

			// precompute face areas

			for (i = 0; i < il; i++) {

				face = faces[i];

				vA = vertices[face.a];
				vB = vertices[face.b];
				vC = vertices[face.c];

				face._area = THREE.GeometryUtils.triangleArea(vA, vB, vC);

				totalArea += face._area;

				cumulativeAreas[i] = totalArea;
			}

			// binary search cumulative areas array

			function binarySearchIndices(value) {

				function binarySearch(start, end) {

					// return closest larger index
					// if exact number is not found

					if (end < start) return start;

					var mid = start + Math.floor((end - start) / 2);

					if (cumulativeAreas[mid] > value) {

						return binarySearch(start, mid - 1);
					} else if (cumulativeAreas[mid] < value) {

						return binarySearch(mid + 1, end);
					} else {

						return mid;
					}
				}

				var result = binarySearch(0, cumulativeAreas.length - 1);
				return result;
			}

			// pick random face weighted by face area

			var r,
			    index,
			    result = [];

			var stats = {};

			for (i = 0; i < n; i++) {

				r = Math.random() * totalArea;

				index = binarySearchIndices(r);

				result[i] = THREE.GeometryUtils.randomPointInFace(faces[index], geometry);

				if (!stats[index]) {

					stats[index] = 1;
				} else {

					stats[index] += 1;
				}
			}

			return result;
		},

		randomPointsInBufferGeometry: function randomPointsInBufferGeometry(geometry, n) {

			var i,
			    vertices = geometry.attributes.position.array,
			    totalArea = 0,
			    cumulativeAreas = [],
			    vA,
			    vB,
			    vC;

			// precompute face areas
			vA = new THREE.Vector3();
			vB = new THREE.Vector3();
			vC = new THREE.Vector3();

			// geometry._areas = [];
			var il = vertices.length / 9;

			for (i = 0; i < il; i++) {

				vA.set(vertices[i * 9 + 0], vertices[i * 9 + 1], vertices[i * 9 + 2]);
				vB.set(vertices[i * 9 + 3], vertices[i * 9 + 4], vertices[i * 9 + 5]);
				vC.set(vertices[i * 9 + 6], vertices[i * 9 + 7], vertices[i * 9 + 8]);

				area = THREE.GeometryUtils.triangleArea(vA, vB, vC);
				totalArea += area;

				cumulativeAreas.push(totalArea);
			}

			// binary search cumulative areas array

			function binarySearchIndices(value) {

				function binarySearch(start, end) {

					// return closest larger index
					// if exact number is not found

					if (end < start) return start;

					var mid = start + Math.floor((end - start) / 2);

					if (cumulativeAreas[mid] > value) {

						return binarySearch(start, mid - 1);
					} else if (cumulativeAreas[mid] < value) {

						return binarySearch(mid + 1, end);
					} else {

						return mid;
					}
				}

				var result = binarySearch(0, cumulativeAreas.length - 1);
				return result;
			}

			// pick random face weighted by face area

			var r,
			    index,
			    result = [];

			for (i = 0; i < n; i++) {

				r = Math.random() * totalArea;

				index = binarySearchIndices(r);

				// result[ i ] = THREE.GeometryUtils.randomPointInFace( faces[ index ], geometry, true );
				vA.set(vertices[index * 9 + 0], vertices[index * 9 + 1], vertices[index * 9 + 2]);
				vB.set(vertices[index * 9 + 3], vertices[index * 9 + 4], vertices[index * 9 + 5]);
				vC.set(vertices[index * 9 + 6], vertices[index * 9 + 7], vertices[index * 9 + 8]);
				result[i] = THREE.GeometryUtils.randomPointInTriangle(vA, vB, vC);
			}

			return result;
		},

		// Get triangle area (half of parallelogram)
		// http://mathworld.wolfram.com/TriangleArea.html

		triangleArea: function () {

			var vector1 = new THREE.Vector3();
			var vector2 = new THREE.Vector3();

			return function (vectorA, vectorB, vectorC) {

				vector1.subVectors(vectorB, vectorA);
				vector2.subVectors(vectorC, vectorA);
				vector1.cross(vector2);

				return 0.5 * vector1.length();
			};
		}(),

		center: function center(geometry) {

			console.warn('THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.');
			return geometry.center();
		}

	};

	/*** EXPORTS FROM exports-loader ***/
	module.exports = THREE.GeometryUtils;


/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "if (_typeface_js && _typeface_js.loadFace) _typeface_js.loadFace({\"glyphs\":{\"ο\":{\"x_min\":0,\"x_max\":712,\"ha\":815,\"o\":\"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 \"},\"S\":{\"x_min\":0,\"x_max\":788,\"ha\":890,\"o\":\"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 \"},\"¦\":{\"x_min\":343,\"x_max\":449,\"ha\":792,\"o\":\"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 \"},\"/\":{\"x_min\":183.25,\"x_max\":608.328125,\"ha\":792,\"o\":\"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 \"},\"Τ\":{\"x_min\":-0.4375,\"x_max\":777.453125,\"ha\":839,\"o\":\"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 \"},\"y\":{\"x_min\":0,\"x_max\":684.78125,\"ha\":771,\"o\":\"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 \"},\"Π\":{\"x_min\":0,\"x_max\":803,\"ha\":917,\"o\":\"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 \"},\"ΐ\":{\"x_min\":-111,\"x_max\":339,\"ha\":361,\"o\":\"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 \"},\"g\":{\"x_min\":0,\"x_max\":686,\"ha\":838,\"o\":\"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 \"},\"²\":{\"x_min\":0,\"x_max\":442,\"ha\":539,\"o\":\"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 \"},\"–\":{\"x_min\":0,\"x_max\":705.5625,\"ha\":803,\"o\":\"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 \"},\"Κ\":{\"x_min\":0,\"x_max\":819.5625,\"ha\":893,\"o\":\"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 \"},\"ƒ\":{\"x_min\":-46.265625,\"x_max\":392,\"ha\":513,\"o\":\"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 \"},\"e\":{\"x_min\":0,\"x_max\":714,\"ha\":813,\"o\":\"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 \"},\"ό\":{\"x_min\":0,\"x_max\":712,\"ha\":815,\"o\":\"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 \"},\"J\":{\"x_min\":0,\"x_max\":588,\"ha\":699,\"o\":\"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 \"},\"»\":{\"x_min\":-1,\"x_max\":503,\"ha\":601,\"o\":\"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 \"},\"©\":{\"x_min\":-3,\"x_max\":1008,\"ha\":1106,\"o\":\"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 \"},\"ώ\":{\"x_min\":0,\"x_max\":922,\"ha\":1030,\"o\":\"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 \"},\"^\":{\"x_min\":193.0625,\"x_max\":598.609375,\"ha\":792,\"o\":\"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 \"},\"«\":{\"x_min\":0,\"x_max\":507.203125,\"ha\":604,\"o\":\"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 \"},\"D\":{\"x_min\":0,\"x_max\":828,\"ha\":935,\"o\":\"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 \"},\"∙\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 \"},\"ÿ\":{\"x_min\":0,\"x_max\":47,\"ha\":125,\"o\":\"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 \"},\"w\":{\"x_min\":0,\"x_max\":1009.71875,\"ha\":1100,\"o\":\"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 \"},\"$\":{\"x_min\":0,\"x_max\":700,\"ha\":793,\"o\":\"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 \"},\"\\\\\":{\"x_min\":-0.015625,\"x_max\":425.0625,\"ha\":522,\"o\":\"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 \"},\"µ\":{\"x_min\":0,\"x_max\":697.21875,\"ha\":747,\"o\":\"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 \"},\"Ι\":{\"x_min\":42,\"x_max\":181,\"ha\":297,\"o\":\"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 \"},\"Ύ\":{\"x_min\":0,\"x_max\":1144.5,\"ha\":1214,\"o\":\"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 \"},\"’\":{\"x_min\":0,\"x_max\":139,\"ha\":236,\"o\":\"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 \"},\"Ν\":{\"x_min\":0,\"x_max\":801,\"ha\":915,\"o\":\"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 \"},\"-\":{\"x_min\":8.71875,\"x_max\":350.390625,\"ha\":478,\"o\":\"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 \"},\"Q\":{\"x_min\":0,\"x_max\":968,\"ha\":1072,\"o\":\"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 \"},\"ς\":{\"x_min\":1,\"x_max\":676.28125,\"ha\":740,\"o\":\"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 \"},\"M\":{\"x_min\":0,\"x_max\":954,\"ha\":1067,\"o\":\"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 \"},\"Ψ\":{\"x_min\":0,\"x_max\":1006,\"ha\":1094,\"o\":\"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 \"},\"C\":{\"x_min\":0,\"x_max\":886,\"ha\":944,\"o\":\"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 \"},\"!\":{\"x_min\":0,\"x_max\":138,\"ha\":236,\"o\":\"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 \"},\"{\":{\"x_min\":0,\"x_max\":480.5625,\"ha\":578,\"o\":\"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 \"},\"X\":{\"x_min\":-0.015625,\"x_max\":854.15625,\"ha\":940,\"o\":\"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 \"},\"#\":{\"x_min\":0,\"x_max\":963.890625,\"ha\":1061,\"o\":\"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 \"},\"ι\":{\"x_min\":42,\"x_max\":284,\"ha\":361,\"o\":\"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 \"},\"Ά\":{\"x_min\":0,\"x_max\":906.953125,\"ha\":982,\"o\":\"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 \"},\")\":{\"x_min\":0,\"x_max\":318,\"ha\":415,\"o\":\"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 \"},\"ε\":{\"x_min\":0,\"x_max\":634.71875,\"ha\":714,\"o\":\"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 \"},\"Δ\":{\"x_min\":0,\"x_max\":952.78125,\"ha\":1028,\"o\":\"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 \"},\"}\":{\"x_min\":0,\"x_max\":481,\"ha\":578,\"o\":\"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 \"},\"‰\":{\"x_min\":-3,\"x_max\":1672,\"ha\":1821,\"o\":\"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 \"},\"a\":{\"x_min\":0,\"x_max\":698.609375,\"ha\":794,\"o\":\"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 \"},\"—\":{\"x_min\":0,\"x_max\":941.671875,\"ha\":1039,\"o\":\"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 \"},\"=\":{\"x_min\":8.71875,\"x_max\":780.953125,\"ha\":792,\"o\":\"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 \"},\"N\":{\"x_min\":0,\"x_max\":801,\"ha\":914,\"o\":\"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 \"},\"ρ\":{\"x_min\":0,\"x_max\":712,\"ha\":797,\"o\":\"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 \"},\"2\":{\"x_min\":59,\"x_max\":731,\"ha\":792,\"o\":\"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 \"},\"¯\":{\"x_min\":0,\"x_max\":941.671875,\"ha\":938,\"o\":\"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 \"},\"Z\":{\"x_min\":0,\"x_max\":779,\"ha\":849,\"o\":\"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 \"},\"u\":{\"x_min\":0,\"x_max\":617,\"ha\":729,\"o\":\"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 \"},\"k\":{\"x_min\":0,\"x_max\":612.484375,\"ha\":697,\"o\":\"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 \"},\"Η\":{\"x_min\":0,\"x_max\":803,\"ha\":917,\"o\":\"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 \"},\"Α\":{\"x_min\":0,\"x_max\":906.953125,\"ha\":985,\"o\":\"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 \"},\"s\":{\"x_min\":0,\"x_max\":604,\"ha\":697,\"o\":\"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 \"},\"B\":{\"x_min\":0,\"x_max\":778,\"ha\":876,\"o\":\"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 \"},\"…\":{\"x_min\":0,\"x_max\":614,\"ha\":708,\"o\":\"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 \"},\"?\":{\"x_min\":0,\"x_max\":607,\"ha\":704,\"o\":\"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 \"},\"H\":{\"x_min\":0,\"x_max\":803,\"ha\":915,\"o\":\"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 \"},\"ν\":{\"x_min\":0,\"x_max\":675,\"ha\":761,\"o\":\"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 \"},\"c\":{\"x_min\":1,\"x_max\":701.390625,\"ha\":775,\"o\":\"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 \"},\"¶\":{\"x_min\":0,\"x_max\":566.671875,\"ha\":678,\"o\":\"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 \"},\"β\":{\"x_min\":0,\"x_max\":660,\"ha\":745,\"o\":\"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 \"},\"Μ\":{\"x_min\":0,\"x_max\":954,\"ha\":1068,\"o\":\"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 \"},\"Ό\":{\"x_min\":0.109375,\"x_max\":1120,\"ha\":1217,\"o\":\"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 \"},\"Ή\":{\"x_min\":0,\"x_max\":1158,\"ha\":1275,\"o\":\"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 \"},\"•\":{\"x_min\":0,\"x_max\":663.890625,\"ha\":775,\"o\":\"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 \"},\"¥\":{\"x_min\":0.1875,\"x_max\":819.546875,\"ha\":886,\"o\":\"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 \"},\"(\":{\"x_min\":0,\"x_max\":318.0625,\"ha\":415,\"o\":\"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 \"},\"U\":{\"x_min\":0,\"x_max\":796,\"ha\":904,\"o\":\"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 \"},\"γ\":{\"x_min\":0.5,\"x_max\":744.953125,\"ha\":822,\"o\":\"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 \"},\"α\":{\"x_min\":0,\"x_max\":765.5625,\"ha\":809,\"o\":\"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 \"},\"F\":{\"x_min\":0,\"x_max\":683.328125,\"ha\":717,\"o\":\"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 \"},\"­\":{\"x_min\":0,\"x_max\":705.5625,\"ha\":803,\"o\":\"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 \"},\":\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 \"},\"Χ\":{\"x_min\":0,\"x_max\":854.171875,\"ha\":935,\"o\":\"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 \"},\"*\":{\"x_min\":116,\"x_max\":674,\"ha\":792,\"o\":\"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 \"},\"†\":{\"x_min\":0,\"x_max\":777,\"ha\":835,\"o\":\"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 \"},\"°\":{\"x_min\":0,\"x_max\":347,\"ha\":444,\"o\":\"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 \"},\"V\":{\"x_min\":0,\"x_max\":862.71875,\"ha\":940,\"o\":\"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 \"},\"Ξ\":{\"x_min\":0,\"x_max\":734.71875,\"ha\":763,\"o\":\"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 \"},\" \":{\"x_min\":0,\"x_max\":0,\"ha\":853},\"Ϋ\":{\"x_min\":0.328125,\"x_max\":819.515625,\"ha\":889,\"o\":\"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 \"},\"0\":{\"x_min\":73,\"x_max\":715,\"ha\":792,\"o\":\"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 \"},\"”\":{\"x_min\":0,\"x_max\":347,\"ha\":454,\"o\":\"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 \"},\"@\":{\"x_min\":0,\"x_max\":1260,\"ha\":1357,\"o\":\"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 \"},\"Ί\":{\"x_min\":0,\"x_max\":499,\"ha\":613,\"o\":\"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 \"},\"i\":{\"x_min\":14,\"x_max\":136,\"ha\":275,\"o\":\"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 \"},\"Β\":{\"x_min\":0,\"x_max\":778,\"ha\":877,\"o\":\"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 \"},\"υ\":{\"x_min\":0,\"x_max\":617,\"ha\":725,\"o\":\"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 \"},\"]\":{\"x_min\":0,\"x_max\":275,\"ha\":372,\"o\":\"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 \"},\"m\":{\"x_min\":0,\"x_max\":1019,\"ha\":1128,\"o\":\"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 \"},\"χ\":{\"x_min\":8.328125,\"x_max\":780.5625,\"ha\":815,\"o\":\"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 \"},\"8\":{\"x_min\":55,\"x_max\":736,\"ha\":792,\"o\":\"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 \"},\"ί\":{\"x_min\":42,\"x_max\":326.71875,\"ha\":361,\"o\":\"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 \"},\"Ζ\":{\"x_min\":0,\"x_max\":779.171875,\"ha\":850,\"o\":\"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 \"},\"R\":{\"x_min\":0,\"x_max\":781.953125,\"ha\":907,\"o\":\"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 \"},\"o\":{\"x_min\":0,\"x_max\":713,\"ha\":821,\"o\":\"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 \"},\"5\":{\"x_min\":54.171875,\"x_max\":738,\"ha\":792,\"o\":\"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 \"},\"7\":{\"x_min\":58.71875,\"x_max\":730.953125,\"ha\":792,\"o\":\"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 \"},\"K\":{\"x_min\":0,\"x_max\":819.46875,\"ha\":906,\"o\":\"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 \"},\",\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 \"},\"d\":{\"x_min\":0,\"x_max\":683,\"ha\":796,\"o\":\"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 \"},\"¨\":{\"x_min\":-109,\"x_max\":247,\"ha\":232,\"o\":\"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 \"},\"E\":{\"x_min\":0,\"x_max\":736.109375,\"ha\":789,\"o\":\"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 \"},\"Y\":{\"x_min\":0,\"x_max\":820,\"ha\":886,\"o\":\"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 \"},\"\\\"\":{\"x_min\":0,\"x_max\":299,\"ha\":396,\"o\":\"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 \"},\"‹\":{\"x_min\":17.984375,\"x_max\":773.609375,\"ha\":792,\"o\":\"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 \"},\"„\":{\"x_min\":0,\"x_max\":364,\"ha\":467,\"o\":\"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 \"},\"δ\":{\"x_min\":1,\"x_max\":710,\"ha\":810,\"o\":\"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 \"},\"έ\":{\"x_min\":0,\"x_max\":634.71875,\"ha\":714,\"o\":\"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 \"},\"ω\":{\"x_min\":0,\"x_max\":922,\"ha\":1031,\"o\":\"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 \"},\"´\":{\"x_min\":0,\"x_max\":96,\"ha\":251,\"o\":\"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 \"},\"±\":{\"x_min\":11,\"x_max\":781,\"ha\":792,\"o\":\"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 \"},\"|\":{\"x_min\":343,\"x_max\":449,\"ha\":792,\"o\":\"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 \"},\"ϋ\":{\"x_min\":0,\"x_max\":617,\"ha\":725,\"o\":\"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 \"},\"§\":{\"x_min\":0,\"x_max\":593,\"ha\":690,\"o\":\"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 \"},\"b\":{\"x_min\":0,\"x_max\":685,\"ha\":783,\"o\":\"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 \"},\"q\":{\"x_min\":0,\"x_max\":683,\"ha\":876,\"o\":\"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 \"},\"Ω\":{\"x_min\":-0.171875,\"x_max\":969.5625,\"ha\":1068,\"o\":\"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 \"},\"ύ\":{\"x_min\":0,\"x_max\":617,\"ha\":725,\"o\":\"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 \"},\"z\":{\"x_min\":-0.015625,\"x_max\":613.890625,\"ha\":697,\"o\":\"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 \"},\"™\":{\"x_min\":0,\"x_max\":894,\"ha\":1000,\"o\":\"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 \"},\"ή\":{\"x_min\":0.78125,\"x_max\":697,\"ha\":810,\"o\":\"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 \"},\"Θ\":{\"x_min\":0,\"x_max\":960,\"ha\":1056,\"o\":\"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 \"},\"®\":{\"x_min\":-3,\"x_max\":1008,\"ha\":1106,\"o\":\"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 \"},\"~\":{\"x_min\":0,\"x_max\":833,\"ha\":931,\"o\":\"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 \"},\"Ε\":{\"x_min\":0,\"x_max\":736.21875,\"ha\":778,\"o\":\"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 \"},\"³\":{\"x_min\":0,\"x_max\":450,\"ha\":547,\"o\":\"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 \"},\"[\":{\"x_min\":0,\"x_max\":273.609375,\"ha\":371,\"o\":\"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 \"},\"L\":{\"x_min\":0,\"x_max\":645.828125,\"ha\":696,\"o\":\"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 \"},\"σ\":{\"x_min\":0,\"x_max\":803.390625,\"ha\":894,\"o\":\"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 \"},\"ζ\":{\"x_min\":0,\"x_max\":573,\"ha\":642,\"o\":\"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 \"},\"θ\":{\"x_min\":0,\"x_max\":674,\"ha\":778,\"o\":\"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 \"},\"Ο\":{\"x_min\":0,\"x_max\":958,\"ha\":1054,\"o\":\"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 \"},\"Γ\":{\"x_min\":0,\"x_max\":705.28125,\"ha\":749,\"o\":\"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 \"},\" \":{\"x_min\":0,\"x_max\":0,\"ha\":375},\"%\":{\"x_min\":-3,\"x_max\":1089,\"ha\":1186,\"o\":\"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 \"},\"P\":{\"x_min\":0,\"x_max\":726,\"ha\":806,\"o\":\"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 \"},\"Έ\":{\"x_min\":0,\"x_max\":1078.21875,\"ha\":1118,\"o\":\"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 \"},\"Ώ\":{\"x_min\":0.125,\"x_max\":1136.546875,\"ha\":1235,\"o\":\"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 \"},\"_\":{\"x_min\":0,\"x_max\":705.5625,\"ha\":803,\"o\":\"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 \"},\"Ϊ\":{\"x_min\":-110,\"x_max\":246,\"ha\":275,\"o\":\"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 \"},\"+\":{\"x_min\":23,\"x_max\":768,\"ha\":792,\"o\":\"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 \"},\"½\":{\"x_min\":0,\"x_max\":1050,\"ha\":1149,\"o\":\"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 \"},\"Ρ\":{\"x_min\":0,\"x_max\":720,\"ha\":783,\"o\":\"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 \"},\"'\":{\"x_min\":0,\"x_max\":139,\"ha\":236,\"o\":\"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 \"},\"ª\":{\"x_min\":0,\"x_max\":350,\"ha\":397,\"o\":\"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 \"},\"΅\":{\"x_min\":0,\"x_max\":450,\"ha\":553,\"o\":\"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 \"},\"T\":{\"x_min\":0,\"x_max\":777,\"ha\":835,\"o\":\"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 \"},\"Φ\":{\"x_min\":0,\"x_max\":915,\"ha\":997,\"o\":\"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 \"},\"⁋\":{\"x_min\":0,\"x_max\":0,\"ha\":694},\"j\":{\"x_min\":-77.78125,\"x_max\":167,\"ha\":349,\"o\":\"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 \"},\"Σ\":{\"x_min\":0,\"x_max\":756.953125,\"ha\":819,\"o\":\"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 \"},\"1\":{\"x_min\":215.671875,\"x_max\":574,\"ha\":792,\"o\":\"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 \"},\"›\":{\"x_min\":18.0625,\"x_max\":774,\"ha\":792,\"o\":\"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 \"},\"<\":{\"x_min\":17.984375,\"x_max\":773.609375,\"ha\":792,\"o\":\"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 \"},\"£\":{\"x_min\":0,\"x_max\":704.484375,\"ha\":801,\"o\":\"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 \"},\"t\":{\"x_min\":0,\"x_max\":367,\"ha\":458,\"o\":\"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 \"},\"¬\":{\"x_min\":0,\"x_max\":706,\"ha\":803,\"o\":\"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 \"},\"λ\":{\"x_min\":0,\"x_max\":750,\"ha\":803,\"o\":\"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 \"},\"W\":{\"x_min\":0,\"x_max\":1263.890625,\"ha\":1351,\"o\":\"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 \"},\">\":{\"x_min\":18.0625,\"x_max\":774,\"ha\":792,\"o\":\"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 \"},\"v\":{\"x_min\":0,\"x_max\":675.15625,\"ha\":761,\"o\":\"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 \"},\"τ\":{\"x_min\":0.28125,\"x_max\":644.5,\"ha\":703,\"o\":\"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 \"},\"ξ\":{\"x_min\":0,\"x_max\":624.9375,\"ha\":699,\"o\":\"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 \"},\"&\":{\"x_min\":-3,\"x_max\":894.25,\"ha\":992,\"o\":\"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 \"},\"Λ\":{\"x_min\":0,\"x_max\":862.5,\"ha\":942,\"o\":\"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 \"},\"I\":{\"x_min\":41,\"x_max\":180,\"ha\":293,\"o\":\"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 \"},\"G\":{\"x_min\":0,\"x_max\":921,\"ha\":1011,\"o\":\"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 \"},\"ΰ\":{\"x_min\":0,\"x_max\":617,\"ha\":725,\"o\":\"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 \"},\"`\":{\"x_min\":0,\"x_max\":138.890625,\"ha\":236,\"o\":\"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 \"},\"·\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 \"},\"Υ\":{\"x_min\":0.328125,\"x_max\":819.515625,\"ha\":889,\"o\":\"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 \"},\"r\":{\"x_min\":0,\"x_max\":355.5625,\"ha\":432,\"o\":\"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 \"},\"x\":{\"x_min\":0,\"x_max\":675,\"ha\":764,\"o\":\"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 \"},\"μ\":{\"x_min\":0,\"x_max\":696.609375,\"ha\":747,\"o\":\"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 \"},\"h\":{\"x_min\":0,\"x_max\":615,\"ha\":724,\"o\":\"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 \"},\".\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 \"},\"φ\":{\"x_min\":-2,\"x_max\":878,\"ha\":974,\"o\":\"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 \"},\";\":{\"x_min\":0,\"x_max\":142,\"ha\":239,\"o\":\"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 \"},\"f\":{\"x_min\":0,\"x_max\":378,\"ha\":472,\"o\":\"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 \"},\"“\":{\"x_min\":1,\"x_max\":348.21875,\"ha\":454,\"o\":\"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 \"},\"A\":{\"x_min\":0.03125,\"x_max\":906.953125,\"ha\":1008,\"o\":\"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 \"},\"6\":{\"x_min\":53,\"x_max\":739,\"ha\":792,\"o\":\"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 \"},\"‘\":{\"x_min\":1,\"x_max\":139.890625,\"ha\":236,\"o\":\"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 \"},\"ϊ\":{\"x_min\":-70,\"x_max\":283,\"ha\":361,\"o\":\"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 \"},\"π\":{\"x_min\":-0.21875,\"x_max\":773.21875,\"ha\":857,\"o\":\"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 \"},\"ά\":{\"x_min\":0,\"x_max\":765.5625,\"ha\":809,\"o\":\"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 \"},\"O\":{\"x_min\":0,\"x_max\":958,\"ha\":1057,\"o\":\"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 \"},\"n\":{\"x_min\":0,\"x_max\":615,\"ha\":724,\"o\":\"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 \"},\"3\":{\"x_min\":54,\"x_max\":737,\"ha\":792,\"o\":\"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 \"},\"9\":{\"x_min\":53,\"x_max\":739,\"ha\":792,\"o\":\"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 \"},\"l\":{\"x_min\":41,\"x_max\":166,\"ha\":279,\"o\":\"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 \"},\"¤\":{\"x_min\":40.09375,\"x_max\":728.796875,\"ha\":825,\"o\":\"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 \"},\"κ\":{\"x_min\":0,\"x_max\":632.328125,\"ha\":679,\"o\":\"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 \"},\"4\":{\"x_min\":48,\"x_max\":742.453125,\"ha\":792,\"o\":\"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 \"},\"p\":{\"x_min\":0,\"x_max\":685,\"ha\":786,\"o\":\"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 \"},\"‡\":{\"x_min\":0,\"x_max\":777,\"ha\":835,\"o\":\"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 \"},\"ψ\":{\"x_min\":0,\"x_max\":808,\"ha\":907,\"o\":\"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 \"},\"η\":{\"x_min\":0.78125,\"x_max\":697,\"ha\":810,\"o\":\"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 \"}},\"cssFontWeight\":\"normal\",\"ascender\":1189,\"underlinePosition\":-100,\"cssFontStyle\":\"normal\",\"boundingBox\":{\"yMin\":-334,\"xMin\":-111,\"yMax\":1189,\"xMax\":1672},\"resolution\":1000,\"original_font_information\":{\"postscript_name\":\"Helvetiker-Regular\",\"version_string\":\"Version 1.00 2004 initial release\",\"vendor_url\":\"http://www.magenta.gr/\",\"full_font_name\":\"Helvetiker\",\"font_family_name\":\"Helvetiker\",\"copyright\":\"Copyright (c) Μagenta ltd, 2004\",\"description\":\"\",\"trademark\":\"\",\"designer\":\"\",\"designer_url\":\"\",\"unique_font_identifier\":\"Μagenta ltd:Helvetiker:22-10-104\",\"license_url\":\"http://www.ellak.gr/fonts/MgOpen/license.html\",\"license_description\":\"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\\r\\n\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\\\"Fonts\\\") and associated documentation files (the \\\"Font Software\\\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \\r\\n\\r\\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\\r\\n\\r\\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \\\"MgOpen\\\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\\r\\n\\r\\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \\\"MgOpen\\\" name.\\r\\n\\r\\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \\r\\n\\r\\nTHE FONT SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.\",\"manufacturer_name\":\"Μagenta ltd\",\"font_sub_family_name\":\"Regular\"},\"descender\":-334,\"familyName\":\"Helvetiker\",\"lineHeight\":1522,\"underlineThickness\":50});"

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeHmr = __webpack_require__(135);

	var _threeHmr2 = _interopRequireDefault(_threeHmr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = _threeHmr2.default.cache(__filename);


	var vertexShader = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4( position, 1.0 );\n}";
	var fragmentShader = "#define GLSLIFY 1\nuniform float time;\nuniform float delta;\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\nuniform sampler2D textureTargetPosition;\n\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvec3 snoiseVec3( vec3 x ){\n\n  float s  = snoise(vec3( x ));\n  float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\nvec3 curlNoise( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3( p - dx );\n  vec3 p_x1 = snoiseVec3( p + dx );\n  vec3 p_y0 = snoiseVec3( p - dy );\n  vec3 p_y1 = snoiseVec3( p + dy );\n  vec3 p_z0 = snoiseVec3( p - dz );\n  vec3 p_z1 = snoiseVec3( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, vUv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, vUv ).xyz;\n\n  //gl_FragColor = vec4( tmpPos2.xyz , 1.0 );\n\n  vec3 newPosition =  position + velocity * delta;\n\n  #ifdef MODE_FLAG_IMMEDIATE //move immediate to the given target position to see the calculated position\n    vec4 targetPosition = texture2D( textureTargetPosition, vUv );\n    \n    if(targetPosition.a > 0.0){\n      newPosition = targetPosition.xyz;\n    }\n\n    //newPosition = vec3(vUv.x, vUv.y, 0.0);\n  #endif  \n  \n  gl_FragColor = vec4( newPosition , 1.0 );\n\n}\n";

	var uniforms = {
	  time: { type: "f", value: 1.0 },
	  delta: { type: "f", value: 0.0 },
	  textureTargetPosition: { type: "t", value: null },
	  texturePosition: { type: "t", value: null },
	  textureVelocity: { type: "t", value: null }
	};

	function create() {
	  var material = new _three2.default.ShaderMaterial({
	    vertexShader: vertexShader, fragmentShader: fragmentShader,
	    uniforms: _three2.default.UniformsUtils.clone(uniforms)
	  });

	  _threeHmr2.default.enable(cache, material);

	  return material;
	};

	exports.default = {
	  create: create
	};


	if (false) {
	  module.hot.accept(function (err) {
	    if (err) throw errr;
	  });
	  _threeHmr2.default.update(cache, {
	    vertexShader: vertexShader, fragmentShader: fragmentShader
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "src/js/spacepixels/shaders/simulate-position.js"))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  A babel plugin should help us inline
	  this file into our bundle, so that users
	  do not need to manually interact with it.
	 */

	var window = __webpack_require__(136)

	// <filename, materialList> cache
	// Stores all materials created by a hot module.
	module.exports.cache = function (filename) {
	  var cache
	  if (window.__hmrShaderCache) {
	    cache = window.__hmrShaderCache
	  } else {
	    cache = {}
	    Object.defineProperty(window, '__hmrShaderCache', {
	      configurable: true,
	      enumerable: false,
	      writable: false,
	      value: cache
	    })
	  }
	  if (!cache[filename]) {
	    cache[filename] = {}
	  }
	  return cache[filename]
	}

	// Enables HMR on the given material
	module.exports.enable = enable
	function enable (cache, material) {
	  var uuid = material.uuid
	  if (cache[uuid]) {
	    throw new Error('This material already has HMR set.')
	  }
	  
	  cache[uuid] = material

	  var oldDispose = material.dispose
	  material.dispose = function () {
	    if (cache[uuid]) delete cache[uuid]
	    return oldDispose.call(material)
	  }

	  var oldClone = material.clone
	  material.clone = function () {
	    var newObj = oldClone.call(material)
	    enable(cache, newObj)
	    return newObj
	  }
	}

	module.exports.update = function (cache, opt) {
	  console.log('[ThreeJS]', 'Patching shaders')
	  Object.keys(cache).forEach(uuid => {
	    var material = cache[uuid]
	    if (!material) return
	    material.setValues(opt)
	    material.needsUpdate = true
	  })
	}


/***/ },
/* 136 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeHmr = __webpack_require__(135);

	var _threeHmr2 = _interopRequireDefault(_threeHmr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = _threeHmr2.default.cache(__filename);


	var vertexShader = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4( position, 1.0 );\n}";
	var fragmentShader = "#define GLSLIFY 1\n#define SPEED     5.0\n#define EPS     0.1\n#define K_NOISE_ACCEL 0.1\n\n#define M_PI    3.14159265358979323846264338327950\n#define M_2PI   6.28318530717958647692528676655900\n#define M_PI2   1.57079632679489661923132169163975\n\n#define EQUALS(A,B) ( abs((A)-(B)) < EPS )\n#define EQUALSZERO(A) ( ((A)<EPS) && ((A)>-EPS) )\n\nuniform float time;\nuniform float delta;\nuniform sampler2D textureVelocity;\nuniform sampler2D texturePosition;\nuniform sampler2D textureTargetPosition;\nuniform vec3 uInputPos;\nuniform vec3 uInputVelocity;\nvarying vec2 vUv;\nuniform vec3 uTargetPosition;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvec3 snoiseVec3( vec3 x ){\n\n  float s  = snoise(vec3( x ));\n  float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\nvec3 curlNoise( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3( p - dx );\n  vec3 p_x1 = snoiseVec3( p + dx );\n  vec3 p_y0 = snoiseVec3( p - dy );\n  vec3 p_y1 = snoiseVec3( p + dy );\n  vec3 p_z0 = snoiseVec3( p - dz );\n  vec3 p_z1 = snoiseVec3( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nvec3 s_plane_point_1540259130(vec2 vUv, vec3 currPos, float size){\n  vec2 coords = vUv * 2.0 - 1.0;\n  vec3 targetPos = vec3(coords.x, 0.0, coords.y);\n  targetPos *= size;\n  return targetPos;\n}\n\nfloat rand(vec2 seed) {\n    return fract(sin(dot(seed.xy,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n#define EPS     0.1\n#define K_NOISE_ACCEL 0.1\n\n#define M_PI    3.14159265358979323846264338327950\n#define M_2PI   6.28318530717958647692528676655900\n#define M_PI2   1.57079632679489661923132169163975\n\n#define K_NUM_ARMS 7.0\n#define K_HEIGHT 0.5\n#define K_SPIN_SPEED 0.35\n\n#define K_NOISE_ACCEL 0.1\n\nvec3 steerToArrive(vec3 target, vec3 position, vec3 velocity, float max_speed){\n  float slowing_distance = 2.0;\n\n  vec3 target_offset = target - position;\n  float distance = length (target_offset);\n  float ramped_speed = max_speed * (distance / slowing_distance);\n  float clipped_speed = min (ramped_speed, max_speed);\n  \n  vec3 desired_velocity = (clipped_speed / distance) * target_offset;\n  vec3 steering = desired_velocity - velocity;\n\n  return steering;\n}\n\nvec3 steerToSeek(vec3 target, vec3 position, vec3 velocity, float maxSpeed, float maxForce){\n  vec3 desiredVelocity = normalize(target - position) * maxSpeed; //desired velocity\n  vec3 steering = normalize(desiredVelocity - velocity) * maxForce; //resulting steering force\n  \n  return steering;\n}\n\nvec3 s_galaxy_force_1062606552(vec2 coords, float time, vec3 currentPosition, vec3 currVelocity){\n  // cylindrical coords\n  float radius = coords.y;\n  float theta = coords.x * M_2PI;\n\n  float randVal = rand(vec2(theta, radius));\n\n  // jitter coords\n  radius += randVal * 0.5;\n  theta += randVal * 0.5;\n\n  float radialArms = sin(K_NUM_ARMS * theta);\n\n  float taperComponent = cos(0.6*radius*M_PI/2.0);\n  taperComponent *= taperComponent;\n  float heightParam = K_HEIGHT                              // height constant\n                    * (rand(vec2(radius, theta))-0.5)   // provide unit thickness with rand\n                    * taperComponent;                 // taper along radius using cosine curve\n\n  float spinParam = theta                   // angle parameter\n                  + radius*radius           // twist at rate r^2\n                  - K_SPIN_SPEED * time;   // spin at constant speed\n\n  vec3 targetPos = vec3(\n      radius * sin(spinParam),\n      heightParam,\n      radius * cos(spinParam)\n  );\n  targetPos *= 3.0;\n\n  float ratio = randVal * (radialArms/2.0+0.5);\n  vec3 steering_force = steerToArrive(targetPos, currentPosition, currVelocity, 20.0);\n\n  steering_force = steering_force * ratio;\n  //steering_force = steering_force + noise(currentPosition) * K_NOISE_ACCEL;\n  \n  return steering_force;\n\n  /*\n  \n  /vec3 toTarget = targetPos - currPos;\n  float toTargetLength = length(toTarget);\n  accel += uShapeAccel * toTarget/toTargetLength\n      * (radialArms/2.0+0.5)  // gravity stronger in arms\n      * randVal;    // randomize gravity prevents banding\n  */\n}\n\n#define Z_SCALE 0.01\n#define SPEED_IN 0.5\n#define SPEED_ROTATE 0.25\n#define ROTATE_MAGNITUDE 0.5\n\n// http://xona.com/colorlist/\n#define FADE_COLOR vec3(0.125, 0.25, 0.5)\n#define FADE_POWER 1.0\n\n#define EQUALS(A,B) ( abs((A)-(B)) < EPS )\n#define EQUALSZERO(A) ( ((A)<EPS) && ((A)>-EPS) )\n\n#define MAX_SPEED 200.0\n\nvoid main() {\n  float decay = 0.99;\n  float mass = 1.0;\n\n  vec3 currentPosition = texture2D( texturePosition, vUv ).xyz;\n  vec3 currVelocity = texture2D( textureVelocity, vUv ).xyz;\n  vec4 targetPosition = texture2D( textureTargetPosition, vUv );\n\n  vec3 accel = vec3(0.0);\n  \n  vec3 targetPoint;\n  vec3 steering_force = vec3(0.0);\n\n  #ifdef MODE_FLAG_NOISE\n    accel += 0.1 * curlNoise(currentPosition);\n  #endif\n\n  #ifdef MODE_FLAG_RANDOM\n    accel += curlNoise(currentPosition + vec3(vUv, 1.0)) * 0.2;\n  #endif\n\n  \n  \n\n  //targetPoint = tunnel(vUv, time);\n  //steering_force = steerToSeek(targetPoint, currentPosition, currVelocity, 12.3, 1.5);\n  //accel += steering_force / mass;\n  #ifdef MODE_FLAG_INPUT\n    if(length(uInputVelocity) > 0.0 ){\n      steering_force = -1.0 * steerToSeek(uInputPos, currentPosition, currVelocity, 5.0, 3.0);\n      accel += steering_force / mass;  \n    }\n    \n  #endif\n  \n  #ifdef MODE_FLAG_BOIDS\n    steering_force = s_galaxy_force_1062606552(vUv, time, currentPosition, currVelocity);\n    accel += steering_force / mass;\n  #endif\n\n  #ifdef MODE_FLAG_FOLLOWPOINT\n    float distance = length(uTargetPosition - currentPosition );\n    \n    if(distance > 3.0 && distance < 5.0) {\n      steering_force = 1.0 * steerToSeek(uTargetPosition, currentPosition, currVelocity, 10.0, 0.7);\n      accel += steering_force / mass;   \n    }\n      \n  #endif\n\n  #ifdef MODE_FLAG_TEXT\n    \n    if(targetPosition.a > 0.0){\n      targetPoint = targetPosition.xyz;\n      steering_force = steerToSeek(targetPoint, currentPosition, currVelocity, 1.0, 1.0);\n    }else{\n      steering_force = s_galaxy_force_1062606552(vUv, time, currentPosition, currVelocity);\n    }\n\n    accel += steering_force / mass;\n\n  #endif\n\n  #ifdef MODE_FLAG_PLOTTER\n    targetPoint = targetPosition.xyz;\n    float distanceTo = length(targetPoint - currentPosition);\n    if(targetPosition.a == 1.0 && !EQUALSZERO(distanceTo)){//only points with a=1 are 'activated' and part of the current model\n\n      steering_force = steerToSeek(targetPoint, currentPosition, currVelocity, 5.0, 1.0);\n      //steering_force = vec3(0.0);\n    }else{\n      //non involved points get some noise\n      steering_force = curlNoise(currentPosition + vec3(vUv, 1.0)) * 0.5;\n      //steering_force = steerToSeek(targetPoint, currentPosition, currVelocity, 1.0, 1.0);\n    }\n    //steering_force = noise( vec3(vUv, 1.0)) * 0.5;\n    accel += steering_force / mass;\n\n  #endif\n\n  #ifdef MODE_FLAG_GALAXY\n    steering_force = s_galaxy_force_1062606552(vUv, time, currentPosition, currVelocity);\n    accel += steering_force / mass;\n  #endif\n  \n  \n\n  vec3 velocity = decay * currVelocity + accel * delta;\n  if(length(velocity) > MAX_SPEED){\n    //velocity = normalize(velocity) * MAX_SPEED;\n  }\n  //velocity = vec3(0.0);\n  \n  \n  gl_FragColor = vec4(velocity, 1.0 );\n}";

	var uniforms = {
	  time: { type: "f", value: 1.0 },
	  delta: { type: "f", value: 0.0 },
	  uTargetPosition: { type: "v3", value: new _three2.default.Vector3() },
	  uInputPos: { type: "v3", value: new _three2.default.Vector3() },
	  uInputVelocity: { type: "v3", value: new _three2.default.Vector3(1, 0, 0) },
	  texturePosition: { type: "t", value: null },
	  textureTargetPosition: { type: "t", value: null },
	  textureVelocity: { type: "t", value: null }
	};

	function create() {
	  var material = new _three2.default.ShaderMaterial({
	    vertexShader: vertexShader, fragmentShader: fragmentShader,
	    uniforms: _three2.default.UniformsUtils.clone(uniforms)
	  });

	  _threeHmr2.default.enable(cache, material);

	  return material;
	};

	exports.default = {
	  create: create
	};


	if (false) {
	  module.hot.accept(function (err) {
	    if (err) throw errr;
	  });
	  _threeHmr2.default.update(cache, {
	    vertexShader: vertexShader, fragmentShader: fragmentShader
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "src/js/spacepixels/shaders/simulate-velocity.js"))

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeHmr = __webpack_require__(135);

	var _threeHmr2 = _interopRequireDefault(_threeHmr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = _threeHmr2.default.cache(__filename);


	var vertexShader = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4( position, 1.0 );\n\n}";
	var fragmentShader = "#define GLSLIFY 1\nuniform float time;\nuniform sampler2D texture;\nuniform sampler2D oldTexture;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 color = texture2D( texture, vUv );\n  \n  //if(color.w == 0.0){\n    //discard;\n    //color = texture2D( oldTexture, vUv ); //dont update then\n  //}\n\n  gl_FragColor = vec4( color.rgba );\n  //gl_FragColor = vec4( color.xyz, 1.0 );\n}";

	var uniforms = {
	  time: { type: "f", value: 1.0 },
	  texture: { type: "t", value: null },
	  oldTexture: { type: "t", value: null }
	};

	function create() {
	  var material = new _three2.default.ShaderMaterial({
	    vertexShader: vertexShader, fragmentShader: fragmentShader,
	    uniforms: _three2.default.UniformsUtils.clone(uniforms)
	  });

	  _threeHmr2.default.enable(cache, material);

	  return material;
	};

	exports.default = {
	  create: create
	};


	if (false) {
	  module.hot.accept(function (err) {
	    if (err) throw errr;
	  });
	  _threeHmr2.default.update(cache, {
	    vertexShader: vertexShader, fragmentShader: fragmentShader
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "src/js/spacepixels/shaders/pass-through.js"))

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray2 = __webpack_require__(140);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _regenerator = __webpack_require__(149);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _keys = __webpack_require__(166);

	var _keys2 = _interopRequireDefault(_keys);

	var _getIterator2 = __webpack_require__(145);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [entries].map(_regenerator2.default.mark);

	function entries(obj) {
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

	  return _regenerator2.default.wrap(function entries$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _iteratorNormalCompletion = true;
	          _didIteratorError = false;
	          _iteratorError = undefined;
	          _context.prev = 3;
	          _iterator = (0, _getIterator3.default)((0, _keys2.default)(obj));

	        case 5:
	          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	            _context.next = 12;
	            break;
	          }

	          key = _step.value;
	          _context.next = 9;
	          return [key, obj[key]];

	        case 9:
	          _iteratorNormalCompletion = true;
	          _context.next = 5;
	          break;

	        case 12:
	          _context.next = 18;
	          break;

	        case 14:
	          _context.prev = 14;
	          _context.t0 = _context['catch'](3);
	          _didIteratorError = true;
	          _iteratorError = _context.t0;

	        case 18:
	          _context.prev = 18;
	          _context.prev = 19;

	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }

	        case 21:
	          _context.prev = 21;

	          if (!_didIteratorError) {
	            _context.next = 24;
	            break;
	          }

	          throw _iteratorError;

	        case 24:
	          return _context.finish(21);

	        case 25:
	          return _context.finish(18);

	        case 26:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}

	var FlagManager = function () {
	  function FlagManager(material, prefix) {
	    (0, _classCallCheck3.default)(this, FlagManager);

	    this._flags = [];
	    this._prefix = prefix;
	    this._material = material;

	    var proxy = new Proxy(this, this);
	    return proxy;
	  }

	  (0, _createClass3.default)(FlagManager, [{
	    key: 'generateKeyName',
	    value: function generateKeyName(key) {
	      return this._prefix + key.toUpperCase();
	    }
	  }, {
	    key: 'write',
	    value: function write() {
	      var targetObj = this._material.defines;

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(entries(this._flags)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2);

	          var key = _step2$value[0];
	          var value = _step2$value[1];

	          var keyname = this.generateKeyName(key);

	          if (value) {
	            targetObj[keyname] = '';
	          } else {
	            delete targetObj[keyname];
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      this._material.needsUpdate = true;
	    }
	  }, {
	    key: 'set',
	    value: function set(target, key, value) {
	      this._flags[key] = value;
	      this.write();
	      return true;
	    }
	  }, {
	    key: 'get',
	    value: function get(target, key) {
	      return this._flags[key];
	    }
	  }], [{
	    key: 'create',
	    value: function create(material, prefix) {
	      return new FlagManager(material, prefix);
	    }
	  }]);
	  return FlagManager;
	}();

	exports.default = FlagManager;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(141);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(145);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(38);
	module.exports = __webpack_require__(143);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(144)
	  , ITERATOR  = __webpack_require__(59)('iterator')
	  , Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(16).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52)
	  , TAG = __webpack_require__(59)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(38);
	module.exports = __webpack_require__(147);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21)
	  , get      = __webpack_require__(148);
	module.exports = __webpack_require__(16).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(144)
	  , ITERATOR  = __webpack_require__(59)('iterator')
	  , Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(16).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(150);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";

	var _promise = __webpack_require__(152);

	var _promise2 = _interopRequireDefault(_promise);

	var _setPrototypeOf = __webpack_require__(82);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(86);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _iterator = __webpack_require__(36);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(65);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

	  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = (0, _create2.default)((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_setPrototypeOf2.default) {
	      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = (0, _create2.default)(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
	        resolve(callInvokeWithMethodAndArg());
	      });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(151)(module), __webpack_require__(117)))

/***/ },
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	__webpack_require__(38);
	__webpack_require__(60);
	__webpack_require__(154);
	module.exports = __webpack_require__(16).Promise;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(42)
	  , global             = __webpack_require__(12)
	  , ctx                = __webpack_require__(17)
	  , classof            = __webpack_require__(144)
	  , $export            = __webpack_require__(15)
	  , isObject           = __webpack_require__(22)
	  , anObject           = __webpack_require__(21)
	  , aFunction          = __webpack_require__(18)
	  , anInstance         = __webpack_require__(155)
	  , forOf              = __webpack_require__(156)
	  , setProto           = __webpack_require__(85).set
	  , speciesConstructor = __webpack_require__(159)
	  , task               = __webpack_require__(160).set
	  , microtask          = __webpack_require__(162)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(59)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(163)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(58)($Promise, PROMISE);
	__webpack_require__(164)(PROMISE);
	Wrapper = __webpack_require__(16)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(157)
	  , isArrayIter = __webpack_require__(158)
	  , anObject    = __webpack_require__(21)
	  , toLength    = __webpack_require__(54)
	  , getIterFn   = __webpack_require__(148)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(44)
	  , ITERATOR   = __webpack_require__(59)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(21)
	  , aFunction = __webpack_require__(18)
	  , SPECIES   = __webpack_require__(59)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(17)
	  , invoke             = __webpack_require__(161)
	  , html               = __webpack_require__(57)
	  , cel                = __webpack_require__(26)
	  , global             = __webpack_require__(12)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(52)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , macrotask = __webpack_require__(160).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(52)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(12)
	  , core        = __webpack_require__(16)
	  , dP          = __webpack_require__(20)
	  , DESCRIPTORS = __webpack_require__(24)
	  , SPECIES     = __webpack_require__(59)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(59)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(168);
	module.exports = __webpack_require__(16).Object.keys;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6)
	  , $keys    = __webpack_require__(48);

	__webpack_require__(14)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _particles = __webpack_require__(170);

	var _particles2 = _interopRequireDefault(_particles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var particleShader = _particles2.default.create();
	//particleShader.uniforms.uAlpha.value = 1.0;
	particleShader.uniforms.uPointSize.value = 5;

	var Particles = function (_THREE$Points) {
	  (0, _inherits3.default)(Particles, _THREE$Points);

	  function Particles(size) {
	    (0, _classCallCheck3.default)(this, Particles);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Particles).call(this, new ParticlesGeometry(size), particleShader));
	  }

	  (0, _createClass3.default)(Particles, [{
	    key: 'update',
	    value: function update(positionBuffer, time) {
	      var uniforms = this.material.uniforms;

	      uniforms.tPos.value = positionBuffer;
	      uniforms.uTime.value = time;
	    }
	  }]);
	  return Particles;
	}(_three2.default.Points);

	exports.default = Particles;

	var ParticlesGeometry = function (_THREE$BufferGeometry) {
	  (0, _inherits3.default)(ParticlesGeometry, _THREE$BufferGeometry);

	  function ParticlesGeometry(size) {
	    (0, _classCallCheck3.default)(this, ParticlesGeometry);

	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ParticlesGeometry).call(this));

	    _this2.generate(size);
	    return _this2;
	  }

	  (0, _createClass3.default)(ParticlesGeometry, [{
	    key: 'generate',
	    value: function generate(size) {
	      var ATTR_WIDTH = 3;

	      var geo = new _three2.default.BufferGeometry();
	      var pos = new Float32Array(size * size * ATTR_WIDTH);

	      for (var x = 0; x < size; x++) {
	        for (var y = 0; y < size; y++) {
	          var idx = x + y * size;

	          pos[ATTR_WIDTH * idx] = (x + 0.5) / size; // +0.5 to be at center of texel
	          pos[ATTR_WIDTH * idx + 1] = (y + 0.5) / size;
	          pos[ATTR_WIDTH * idx + 2] = idx / (size * size); // extra: normalized id
	        }
	      }

	      this.addAttribute("position", new _three2.default.BufferAttribute(pos, ATTR_WIDTH));
	      return geo;
	    }
	  }]);
	  return ParticlesGeometry;
	}(_three2.default.BufferGeometry);

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeHmr = __webpack_require__(135);

	var _threeHmr2 = _interopRequireDefault(_threeHmr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = _threeHmr2.default.cache(__filename);



	var vertexShader = "#define GLSLIFY 1\n#define M_PI    3.14159265358979323846264338327950\n#define M_2PI   6.28318530717958647692528676655900\n#define M_PI2   1.57079632679489661923132169163975\n\n#define EPS     0.0001\n\n#define EQUALS(A,B) ( abs((A)-(B)) < EPS )\n#define EQUALSZERO(A) ( ((A)<EPS) && ((A)>-EPS) )\n\n#define PS_CAM_MAX_DIST 12.0\n\nvarying vec3 vColor;\nvarying vec3 vPos;\n\nuniform sampler2D tPos;\nuniform float uTime;\nuniform float uPointSize;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform vec3 uColor3;\nuniform float uColorFreq;\nuniform float uColorSpeed;\n\n//varying float vPointSize;\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    vColor = mix(uColor3, vColor, cos(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/4.0+1.0);\n    \n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    vPos = pos;\n    \n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n    //vPointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n/*\n\n\n\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    float ratio = 1.0 - pow(abs(position.z), 1.0);\n    vColor = mix(uColor1, uColor2, ratio);\n\n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    pos.y = -2.5 + (1.0 - pow(abs(position.z - 0.5), 1.0)) * 5.0;\n\n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n*//*\n\n\n\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    float ratio = 1.0 - pow(abs(position.z), 1.0);\n    vColor = mix(uColor1, uColor2, ratio);\n\n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    pos.y = -2.5 + (1.0 - pow(abs(position.z - 0.5), 1.0)) * 5.0;\n\n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n*//*\n\n\n\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    float ratio = 1.0 - pow(abs(position.z), 1.0);\n    vColor = mix(uColor1, uColor2, ratio);\n\n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    pos.y = -2.5 + (1.0 - pow(abs(position.z - 0.5), 1.0)) * 5.0;\n\n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n*//*\n\n\n\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    float ratio = 1.0 - pow(abs(position.z), 1.0);\n    vColor = mix(uColor1, uColor2, ratio);\n\n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    pos.y = -2.5 + (1.0 - pow(abs(position.z - 0.5), 1.0)) * 5.0;\n\n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n*//*\n\n\n\nvoid main() {\n    vColor = mix(uColor1, uColor2, sin(uColorSpeed*uTime + uColorFreq*position.z*M_2PI)/2.0+0.5);\n    float ratio = 1.0 - pow(abs(position.z), 1.0);\n    vColor = mix(uColor1, uColor2, ratio);\n\n    vec3 pos = texture2D(tPos, position.xy).rgb;\n    pos.y = -2.5 + (1.0 - pow(abs(position.z - 0.5), 1.0)) * 5.0;\n\n    vec3 camToPos = pos - cameraPosition;\n    float camDist = length(camToPos);\n\n    gl_PointSize = max(uPointSize * PS_CAM_MAX_DIST/camDist, 1.0);\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n\n*/";
	var fragmentShader = "#define GLSLIFY 1\n#define M_PI    3.14159265358979323846264338327950\n#define M_2PI   6.28318530717958647692528676655900\n#define M_PI2   1.57079632679489661923132169163975\n\n#define EPS     0.0001\n\n#define EQUALS(A,B) ( abs((A)-(B)) < EPS )\n#define EQUALSZERO(A) ( ((A)<EPS) && ((A)>-EPS) )\n\nvarying vec3 vColor;\nvarying vec3 vPos;\n\nuniform float uTime;\nuniform float uAlpha;\n\nvec3 tunnel(vec2 coord, float time){\n    float i0=1.0;\n    float i1=1.0;\n    float i2=1.0;\n    float i4=0.0;\n    \n    for(int s=0;s<7;s++)\n    {\n      vec2 r;\n      r=vec2(cos(coord.y*i0-i4+time/i1),sin(coord.x*i0-i4+time/i1))/i2;\n          r+=vec2(-r.y,r.x)*0.3;\n      coord.xy+=r;\n          \n      i0*=1.93;\n      i1*=1.15;\n      i2*=1.7;\n      i4+=0.05+0.1*time*i1;\n    }\n    \n    float r=sin(coord.x-time)*0.5+0.5;\n    float b=sin(coord.y+time)*0.5+0.5;\n    float g=sin((coord.x+coord.y+sin(time*0.5))*0.5)*0.5+0.5;\n  \n    return vec3(r,g,b);\n}\n\nvoid main() {\n\n    //draw a round point derived from the default recatangle shape of the point\n    float dist = distance( vec2(0.5,0.5), gl_PointCoord );\n    \n    if(dist > 0.5){\n      discard;\n    }\n\n    float alpha = 1.0 - dist/0.5; //normalize to 1\n    alpha = 1.0 - dist;\n\n    //vec2 tmpCoord = vec2(0.5 * cos(M_2PI*gl_PointCoord.x+M_PI) + 0.5, 0.5 * cos(M_2PI*gl_PointCoord.y+M_PI) + 0.5);\n    \n    // calc alpha for shape\n    vec2 tmpCoord = 0.5 * cos(M_2PI*gl_PointCoord+M_PI) + 0.5;\n    alpha = tmpCoord.x * tmpCoord.y;\n\n    //vec3 color = tunnel(uv, uTime);\n    gl_FragColor = vec4(vColor, uAlpha * alpha);\n}";

	var uniforms = {
	  "tPos": { type: "t", value: null },
	  "uTime": { type: "f", value: 0.0 },
	  "uPointSize": { type: "f", value: 2.5 },
	  "uAlpha": { type: "f", value: 0.2 },
	  //"uColor1": { type: "v3", value: new THREE.Vector3(1.0, 0, 0) },//ff6600
	  //"uColor2": { type: "v3", value: new THREE.Vector3(0, 0, 1.0) },//6666ff
	  "uColor1": { type: "v3", value: new _three2.default.Vector3(1.0, 0.4, 0.0) }, //ff6600
	  "uColor2": { type: "v3", value: new _three2.default.Vector3(0.4, 0.4, 1.0) }, //6666ff
	  "uColor3": { type: "v3", value: new _three2.default.Vector3(0, 1, 0) },
	  "uColorFreq": { type: "f", value: 1.0 },
	  "uColorSpeed": { type: "f", value: 2.0 }
	};

	exports.default = {
	  create: function create() {
	    var material = new _three2.default.ShaderMaterial({
	      uniforms: _three2.default.UniformsUtils.clone(uniforms),
	      vertexShader: vertexShader, fragmentShader: fragmentShader
	    });

	    material.blending = _three2.default.AdditiveBlending;
	    material.transparent = true;
	    material.depthTest = false;
	    material.depthWrite = false;

	    _threeHmr2.default.enable(cache, material);

	    return material;
	  }
	};


	if (false) {
	  module.hot.accept(function (err) {
	    if (err) throw errr;
	  });
	  _threeHmr2.default.update(cache, {
	    vertexShader: vertexShader, fragmentShader: fragmentShader
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "src/js/spacepixels/shaders/particles.js"))

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _cameraPath = __webpack_require__(172);

	var _cameraPath2 = _interopRequireDefault(_cameraPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//http://threejs.org/examples/webgl_geometry_spline_editor.html

	function defaultPath() {
	  var vertices = [new _three2.default.Vector3(183.82773679913026, -5.490634820449451, 101.63940256499984), new _three2.default.Vector3(63.52612748516373, 0.11977136878908823, -2.2083697667991102), new _three2.default.Vector3(9.981421434893676, 51.60363481643016, -64.05138024426003), new _three2.default.Vector3(-58.50084839100885, -14.577238607049125, -34.670403560388635), new _three2.default.Vector3(-11.810860140309892, -1.888728748187404, 28.14611990486584), new _three2.default.Vector3(28.25378476181088, 30.498463879751707, -26.52757074518796), new _three2.default.Vector3(-112.52454145144266, 36.4381108142651, 49.9097904148296), new _three2.default.Vector3(0, 0, 152.71152905138982)];
	  var matrix = createMatrix(0.1);

	  for (var i = 0, il = vertices.length; i < il; i++) {

	    var vertex = vertices[i];
	    vertex.applyMatrix4(matrix);
	  }
	  return generatePath(vertices);
	}

	function createMatrix() {
	  var scale = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	  var matrix = new _three2.default.Matrix4();
	  matrix.multiplyScalar(0.01);
	  return matrix;

	  //var euler = new THREE.Euler( Math.PI, 0, 0, 'YXZ' );
	  var q = new _three2.default.Quaternion();
	  q.setFromEuler(euler);

	  var p = new _three2.default.Vector3(0, 0, 0),
	      s = new _three2.default.Vector3(scale, scale, scale);

	  matrix.compose(p, q, s);
	}

	function mirrorPath() {
	  var matrix = createMatrix();

	  var vertices = [new _three2.default.Vector3(599.4446995639825, -204.28065866420454, -0.22426862166743433), new _three2.default.Vector3(199.8765568639659, -193.15758919285776, -2.2083697667991102), new _three2.default.Vector3(29.99804202860742, -72.2108342233512, -163.31324175630647), new _three2.default.Vector3(-76.416232666872, -267.3145676788882, -34.670403560388635), new _three2.default.Vector3(-29.53591789704594, -235.71469771381877, 43.419815824873076), new _three2.default.Vector3(171.89071225990034, 16.74015020780562, -29.877951707003604), new _three2.default.Vector3(-42.528695597317835, 136.50439947289686, -165.30419976476233)];

	  for (var i = 0, il = vertices.length; i < il; i++) {

	    var vertex = vertices[i];
	    vertex.applyMatrix4(matrix);
	  }
	  return generatePath(vertices);
	}

	function createCatmull(vertices) {
	  return generatePath(vertices);
	}

	function create() {
	  return defaultPath();

	  /*switch(id){
	    default: return defaultPath();
	  }*/
	}

	function generatePath(list) {
	  var curve,
	      cameraPath = new _cameraPath2.default();

	  curve = new _three2.default.CatmullRomCurve3(list);
	  cameraPath.add(curve);

	  return cameraPath;
	}

	exports.default = {
	  create: create,
	  createCatmull: createCatmull
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _cameraPathDrawer = __webpack_require__(173);

	var _cameraPathDrawer2 = _interopRequireDefault(_cameraPathDrawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CameraPath = function () {
	  function CameraPath() {
	    (0, _classCallCheck3.default)(this, CameraPath);

	    this._internalPath = new _three2.default.CurvePath();
	    this._debugView = new _cameraPathDrawer2.default(this);
	  }

	  (0, _createClass3.default)(CameraPath, [{
	    key: 'add',
	    value: function add(curve) {
	      this._internalPath.add(curve);
	      this._debugView.addCurve(curve);
	    }
	  }, {
	    key: 'getDebugView',
	    value: function getDebugView() {
	      return this._debugView;
	    }
	  }, {
	    key: 'showCameraAt',
	    value: function showCameraAt(camera, t) {
	      if (t < 0.001) {
	        t = 0.001;
	      }

	      var pos = this._internalPath.getPoint(t);
	      var pos2 = this._internalPath.getPoint(t - 0.001); //look forward
	      var direction = pos.clone().sub(pos2).normalize();

	      camera.position.copy(pos2);
	      //camera.lookAt( pos);

	      if (this._debugView) {
	        this._debugView.update(pos, pos2);
	      }
	    }
	  }]);
	  return CameraPath;
	}();

	exports.default = CameraPath;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(THREE) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CameraDebugPath = function (_THREE$Object3D) {
	  (0, _inherits3.default)(CameraDebugPath, _THREE$Object3D);

	  function CameraDebugPath(path) {
	    (0, _classCallCheck3.default)(this, CameraDebugPath);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CameraDebugPath).call(this));

	    _this.path = path;

	    _this.createArrow();
	    return _this;
	  }

	  (0, _createClass3.default)(CameraDebugPath, [{
	    key: "createArrow",
	    value: function createArrow() {
	      var dir = new THREE.Vector3(1, 0, 0);
	      var origin = new THREE.Vector3(0, 0, -1);
	      var length = 1;
	      var hex = 0xff0000;
	      var headWidth = 0.5;
	      var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex, headWidth);
	      arrowHelper.scale.set(1, 1, 1);
	      arrowHelper.up = new THREE.Vector3(1, 0, 0);
	      this.arrowHelper = arrowHelper;
	      this.add(this.arrowHelper);
	    }
	  }, {
	    key: "addCurve",
	    value: function addCurve(curve) {
	      this.createLine(curve);
	    }
	  }, {
	    key: "createLine",
	    value: function createLine(curve) {
	      var geometry = new THREE.Geometry();
	      geometry.vertices = this.path._internalPath.getPoints(50);
	      geometry.verticesNeedUpdate = true;
	      var material = new THREE.LineBasicMaterial({ color: 0xff0000 });

	      var geometry = new THREE.Geometry();
	      geometry.vertices = curve.getPoints(50);
	      geometry.verticesNeedUpdate = true;
	      var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 3 }));
	      this.add(line);
	    }
	  }, {
	    key: "update",
	    value: function update(p1, p2) {
	      var direction = p1.clone().sub(p2).normalize();
	      this.arrowHelper.setDirection(direction);

	      this.arrowHelper.position.copy(p1);
	    }
	  }]);
	  return CameraDebugPath;
	}(THREE.Object3D);

	exports.default = CameraDebugPath;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _resourceLoader = __webpack_require__(175);

	var _resourceLoader2 = _interopRequireDefault(_resourceLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var preloader = new _resourceLoader2.default();

	function load(cb) {
	  preloader.add('bear', 'assets/bear.json').add('wolf', 'assets/wolf.json').add('tree', 'assets/tree.obj').load(function (loader, resources) {
	    return cb(resources);
	  });
	}

	exports.default = {
	  load: load, getResources: function getResources() {
	    return preloader.resources;
	  }
	};

/***/ },
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.models = exports.getModel = undefined;

	var _preloader = __webpack_require__(174);

	var _preloader2 = _interopRequireDefault(_preloader);

	var _lodash = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var models = [{
	  id: 'bear',
	  source: 'assets/bear.json',
	  scale: 0.02
	}, {
	  id: 'wolf',
	  source: 'assets/wolf.json',
	  scale: 0.05
	}];

	function getModel(id) {
	  return (0, _lodash.find)(models, function (item) {
	    return item.id == id;
	  });
	}

	exports.getModel = getModel;
	exports.models = models;

/***/ },
/* 191 */,
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(193);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _data = __webpack_require__(190);

	var data = _interopRequireWildcard(_data);

	var _debug = __webpack_require__(89);

	var _debug2 = _interopRequireDefault(_debug);

	var _preloader = __webpack_require__(174);

	var _preloader2 = _interopRequireDefault(_preloader);

	var _utils = __webpack_require__(131);

	var utils = _interopRequireWildcard(_utils);

	var _animatedMesh = __webpack_require__(195);

	var _animatedMesh2 = _interopRequireDefault(_animatedMesh);

	var _mesh = __webpack_require__(196);

	var _mesh2 = _interopRequireDefault(_mesh);

	var _text = __webpack_require__(199);

	var _text2 = _interopRequireDefault(_text);

	var _boid = __webpack_require__(200);

	var _boid2 = _interopRequireDefault(_boid);

	var _movingTarget = __webpack_require__(201);

	var _movingTarget2 = _interopRequireDefault(_movingTarget);

	var _lodash = __webpack_require__(191);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
	  selectedModel: null,
	  selectedAnimation: null,
	  currentText: null,
	  moving: false
	};

	var modelList = {
	  "None": (0, _stringify2.default)(false),
	  "Bear": (0, _stringify2.default)({ id: 'bear', type: 'static' }),
	  "Bear (animated)": (0, _stringify2.default)({ id: 'bear', type: 'animated' }),
	  "Wolf": (0, _stringify2.default)({ id: 'wolf', type: 'static' }),
	  "Wolf (animated)": (0, _stringify2.default)({ id: 'wolf', type: 'animated' })
	};

	function create(spacepixels) {
	  addModelSelection(spacepixels);
	  addText(spacepixels);
	  addMovingTarget(spacepixels);
	  addBoid(spacepixels);

	  addMiscOptions(spacepixels);
	  addResetFunction();
	}

	function runFirst() {
	  state.selectedModel = modelList['Bear'];
	  //show the bear for the beginning
	}

	function syncParams(listener, targetObject, property) {
	  listener.onChange(function (newValue) {
	    targetObject[property] = newValue;
	  });
	}

	/////////
	//Misc //
	/////////
	function addMiscOptions(spacepixels) {
	  var miscFolder = _debug2.default.gui.addFolder('Miscellaneous');
	  var listener;

	  state.other = {
	    basicNoise: true,
	    immediatePosition: false
	  };

	  listener = miscFolder.add(state.other, 'basicNoise');
	  syncParams(listener, spacepixels.simulator.velocityFlags, 'random');

	  listener = miscFolder.add(state.other, 'immediatePosition');
	  syncParams(listener, spacepixels.simulator.positionFlags, 'immediate');

	  //show axis
	  //global velocity/speed
	  //coloring?
	}

	/////////////////
	//Global Reset //
	/////////////////
	function addResetFunction() {

	  //Reset function
	  state.reset = function () {
	    console.log('reset all');
	  };

	  _debug2.default.gui.add(state, 'reset').name("Reset");
	}

	///////////////
	//Boid Magic //
	///////////////
	function addBoid(spacepixels) {
	  var decorator = new _boid2.default(spacepixels);
	  var folder = _debug2.default.gui.addFolder('Flocking Boid');

	  state.boids = {
	    enabled: false
	  };

	  var listener = folder.add(state.movingTarget, 'enabled').name('Enabled');

	  listener.onChange(function (value) {
	    if (value) {
	      decorator.activate();
	    } else {
	      decorator.deactivate();
	    }
	  });
	}

	//////////////////
	//Moving Target //
	//////////////////
	function addMovingTarget(spacepixels) {
	  var decorator = new _movingTarget2.default(spacepixels);

	  state.movingTarget = {
	    enabled: false
	  };

	  var folder = _debug2.default.gui.addFolder('Path');
	  var listener = folder.add(state.movingTarget, 'enabled').name('Enabled');

	  listener.onChange(function (value) {
	    if (value) {
	      decorator.activate();
	    } else {
	      decorator.deactivate();
	    }
	  });
	}

	/////////////////
	//Mesh Targets //
	/////////////////
	function addModelSelection(spacepixels) {
	  var meshDecoratorInstance = new _mesh2.default(spacepixels);

	  state.selectedModel = modelList["Bear"];
	  var mesh = void 0,
	      listener = _debug2.default.gui.add(state, 'selectedModel', modelList).name('Models');

	  function showModel(data) {
	    var parsedData = JSON.parse(data);

	    if (parsedData === false) {

	      meshDecoratorInstance.deactivate();
	    } else {

	      if (parsedData.type == 'static') {
	        mesh = createMesh(parsedData.id);
	      } else {
	        mesh = createAnimation(parsedData.id);
	      }

	      meshDecoratorInstance.showMesh(mesh);
	    }
	  }

	  listener.onChange(showModel);

	  state.selectedModel = modelList["Bear"];
	  showModel(state.selectedModel);
	}

	/////////
	//Text //
	/////////
	function addText(spacepixels) {
	  var textFolder = _debug2.default.gui.addFolder('Text');

	  var textDecoratorInstance = new _text2.default(spacepixels);
	  state.text = {};
	  state.text.currentText = "";
	  state.text.selectedText = "";

	  var predefinedTextValues = ['yOO :)', 'hello', 'oH BOY!!!11!'];

	  var selectTextListener = textFolder.add(state.text, 'selectedText', predefinedTextValues);
	  selectTextListener.onChange(function (newText) {
	    state.text.currentText = newText;
	    handleTextChange(newText);
	  });

	  var textChangedListener = textFolder.add(state.text, 'currentText').name("Enter Text:").listen();

	  var handleTextChange = function handleTextChange(newText) {
	    if (newText.length == 0) {
	      textDecoratorInstance.deactivate();
	    } else {
	      textDecoratorInstance.setText(newText);
	    }
	  };

	  handleTextChange = (0, _lodash.debounce)(handleTextChange, 500);
	  textChangedListener.onChange(handleTextChange);
	}

	exports.default = {
	  create: create,
	  runFirst: runFirst
	};

	////////////
	//helpers //
	////////////

	function createMesh(id) {
	  var resources = _preloader2.default.getResources();
	  var modelData = resources[id].data;
	  var modelInfo = data.getModel(id);
	  var mesh = utils.createMeshFromJson(modelData, modelInfo.scale);

	  return mesh;
	}

	function createAnimation(id) {
	  var resources = _preloader2.default.getResources();
	  var modelInfo = data.getModel(id);
	  var modelData = resources[id].data;

	  var animatedMesh = new _animatedMesh2.default(utils.parseGeometryJson(modelData), 1);
	  animatedMesh.scale.setScalar(modelInfo.scale);

	  return animatedMesh;
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(16)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AnimatedMesh = function (_THREE$Mesh) {
	  (0, _inherits3.default)(AnimatedMesh, _THREE$Mesh);

	  function AnimatedMesh(geometry, fps) {
	    (0, _classCallCheck3.default)(this, AnimatedMesh);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AnimatedMesh).call(this, geometry, new _three2.default.MeshNormalMaterial({ morphTargets: true })));

	    _this.geometry.center();

	    _this._fps = fps;
	    _this.init();
	    return _this;
	  }

	  (0, _createClass3.default)(AnimatedMesh, [{
	    key: "init",
	    value: function init() {
	      var mixer = new _three2.default.AnimationMixer(this);
	      mixer.timeScale = 1 / 4;

	      var clip = _three2.default.AnimationClip.CreateFromMorphTargetSequence('gallop', this.geometry.morphTargets, 6);
	      mixer.clipAction(clip).play();

	      this._mixer = mixer;
	    }
	  }, {
	    key: "update",
	    value: function update(dt) {
	      this._mixer.update(dt);
	    }
	  }]);
	  return AnimatedMesh;
	}(_three2.default.Mesh);

	exports.default = AnimatedMesh;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _meshPlotter = __webpack_require__(197);

	var _meshPlotter2 = _interopRequireDefault(_meshPlotter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MeshDecorator = function () {
	  function MeshDecorator(spacepixels) {
	    (0, _classCallCheck3.default)(this, MeshDecorator);

	    this.handleStep = this.handleStep.bind(this);
	    this.spacepixels = spacepixels;
	    this.init();
	  }

	  (0, _createClass3.default)(MeshDecorator, [{
	    key: 'init',
	    value: function init() {
	      var meshPlotter = new _meshPlotter2.default(this.spacepixels.world.renderer, this.spacepixels.size);
	      this.meshPlotter = meshPlotter;
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      this.spacepixels.on('step', this.handleStep);
	      this.simulator.setTargetPositions(this.meshPlotter.target);
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.spacepixels.simulator.velocityFlags.plotter = false;
	      this.spacepixels.removeListener('step', this.handleStep);
	    }
	  }, {
	    key: 'showMesh',
	    value: function showMesh(mesh) {
	      this.spacepixels.simulator.velocityFlags.plotter = true;
	      this.meshPlotter.setMesh(mesh);

	      this.activate();
	    }
	  }, {
	    key: 'handleStep',
	    value: function handleStep(dt, time) {
	      this.meshPlotter.update(dt);
	      this.meshPlotter.render();
	    }
	  }, {
	    key: 'simulator',
	    get: function get() {
	      return this.spacepixels.simulator;
	    }
	  }]);
	  return MeshDecorator;
	}();

	exports.default = MeshDecorator;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _uvmapper = __webpack_require__(198);

	var _uvmapper2 = _interopRequireDefault(_uvmapper);

	var _bufferPingPong = __webpack_require__(130);

	var _bufferPingPong2 = _interopRequireDefault(_bufferPingPong);

	var _utils = __webpack_require__(131);

	var util = _interopRequireWildcard(_utils);

	var _shaderPass = __webpack_require__(129);

	var _shaderPass2 = _interopRequireDefault(_shaderPass);

	var _passThrough = __webpack_require__(138);

	var _passThrough2 = _interopRequireDefault(_passThrough);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var passThroughMaterial = _passThrough2.default.create();

	//Plots surface points to a render target so that they can be used in simulations
	//this works also for animated meshes

	var MeshPlotter = function () {
	  function MeshPlotter(renderer, size) {
	    (0, _classCallCheck3.default)(this, MeshPlotter);

	    this._renderer = renderer;
	    this._size = size;

	    this.init();
	  }

	  (0, _createClass3.default)(MeshPlotter, [{
	    key: 'init',
	    value: function init() {
	      var target1 = util.createRenderTarget(this._size, 'uvmapper1');
	      var target2 = util.createRenderTarget(this._size, 'uvmapper2');
	      this._target = new _bufferPingPong2.default(target1, target2);

	      this._passThroughPass = new _shaderPass2.default(passThroughMaterial);
	      this._passThroughPass.material.uniforms.texture.value = util.getClearTexture(this._size);
	      this._passThroughPass.render(this._renderer, this._target.write); //clear manually with our own data
	      this._passThroughPass.render(this._renderer, this._target.source); //clear manually with our own data

	      this.material = _uvmapper2.default.create();

	      this._scene = new _three2.default.Scene();
	      this._scene.overrideMaterial = this.material;
	      this._camera = new _three2.default.OrthographicCamera(-1, 1, 1, -1, 0, 1);

	      this.generateDebugPlane();
	      this.setDetails(0.75);
	    }
	  }, {
	    key: 'generateDebugPlane',
	    value: function generateDebugPlane() {
	      //allows to look at the involved data
	      var texture = new _three2.default.MeshBasicMaterial({ transparent: true, map: this._target.source });
	      var plane = new _three2.default.Mesh(new _three2.default.PlaneBufferGeometry(5, 5), texture);
	      plane.rotation.x = -Math.PI / 2;
	      this.debugPlane = plane; //to look into the uv texture
	    }
	  }, {
	    key: 'setDetails',
	    value: function setDetails(value) {
	      this.material.uniforms.scale.value = value;
	    }
	  }, {
	    key: 'setMesh',
	    value: function setMesh(mesh) {
	      this._mesh = mesh;
	      this._scene.add(this._mesh);

	      this.render();
	    }
	  }, {
	    key: 'update',
	    value: function update(dt) {
	      if (this._mesh && this._mesh.update) {
	        this._mesh.update(dt);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var saveClearColor = this._renderer.getClearColor();
	      var saveClearAlpha = this._renderer.getClearAlpha();

	      this._renderer.setClearColor(0, 0); //todo: clear the buffer with a color with alpha = 0, global clear color is  alpha = 1
	      this._renderer.render(this._scene, this._camera, this._target.write, false);
	      this._renderer.setClearColor(saveClearColor, saveClearAlpha);

	      this._target.swap();
	    }
	  }, {
	    key: 'target',
	    get: function get() {
	      return this._target;
	    }
	  }], [{
	    key: 'create',
	    value: function create(mesh, renderer, size) {
	      var mapper = new MeshMapper(renderer, size);
	      mapper.setMesh(mesh);
	    }
	  }]);
	  return MeshPlotter;
	}();

	exports.default = MeshPlotter;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _threeHmr = __webpack_require__(135);

	var _threeHmr2 = _interopRequireDefault(_threeHmr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = _threeHmr2.default.cache(__filename);


	var vertexShader = "#define GLSLIFY 1\nvarying vec3 vPos;\n\n#ifdef USE_MORPHTARGETS\n    uniform float morphTargetInfluences[ 4 ];\n#endif\n\nuniform float scale;//scale uv down, so that it's using less points\n\nvoid main() {\n\n#ifdef USE_MORPHTARGETS\n    vec3 morphed = vec3( 0.0 );\n    morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n    morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n    morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n    morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n    morphed += position;\n\n    vPos = (modelMatrix * vec4(morphed, 1.0)).xyz;\n#else\n    vPos = (modelMatrix * vec4(position, 1.0)).xyz;\n#endif\n    //vPos = (modelMatrix * vec4(position, 1.0)).xyz;\n  \n    vec2 drawUV = uv * 2.0 - 1.0;\n    drawUV = drawUV * scale;\n\n    gl_Position = vec4(drawUV.x, drawUV.y, 0.0, 1.0);\n}";
	var fragmentShader = "#define GLSLIFY 1\nvarying vec3 vPos;\n\nvoid main() {\n    gl_FragColor = vec4(vPos, 1.0);\n}";

	var uniforms = {
	  scale: { type: "f", value: 1.0 }
	};

	function create() {
	  var material = new _three2.default.ShaderMaterial({
	    vertexShader: vertexShader, fragmentShader: fragmentShader,
	    uniforms: _three2.default.UniformsUtils.clone(uniforms)
	  });

	  material.side = _three2.default.DoubleSide;
	  material.blending = _three2.default.NoBlending;
	  material.depthTest = false;
	  material.depthWrite = false;
	  material.morphTargets = true;

	  _threeHmr2.default.enable(cache, material);
	  return material;
	};

	exports.default = { create: create };


	if (false) {
	  module.hot.accept(function (err) {
	    if (err) throw errr;
	  });
	  _threeHmr2.default.update(cache, {
	    vertexShader: vertexShader, fragmentShader: fragmentShader
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "src/js/spacepixels/shaders/uvmapper.js"))

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _meshPlotter = __webpack_require__(197);

	var _meshPlotter2 = _interopRequireDefault(_meshPlotter);

	var _utils = __webpack_require__(131);

	var utils = _interopRequireWildcard(_utils);

	var _bufferPingPong = __webpack_require__(130);

	var _bufferPingPong2 = _interopRequireDefault(_bufferPingPong);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TextDecorator = function () {
	  function TextDecorator(spacepixels) {
	    (0, _classCallCheck3.default)(this, TextDecorator);

	    this.spacepixels = spacepixels;
	  }

	  (0, _createClass3.default)(TextDecorator, [{
	    key: 'activate',
	    value: function activate() {
	      this.simulator.velocityFlags.text = true;
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.simulator.velocityFlags.text = false;
	      this.simulator.clearTargetPositions();
	    }
	  }, {
	    key: 'setText',
	    value: function setText(value) {
	      if (!value || value.length < 1) {
	        this.deactivate();
	        return;
	      }

	      this.activate();

	      var size = this.spacepixels.size;

	      var dtPositionTexture = utils.generateTextPoints(value, size, size * size / 2);
	      var buffer = new _bufferPingPong2.default(dtPositionTexture);

	      this.simulator.setTargetPositions(buffer);
	      this.activate();
	    }
	  }, {
	    key: 'simulator',
	    get: function get() {
	      return this.spacepixels.simulator;
	    }
	  }]);
	  return TextDecorator;
	}();

	exports.default = TextDecorator;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BoidDecorator = function () {
	  function BoidDecorator(spacepixels) {
	    (0, _classCallCheck3.default)(this, BoidDecorator);

	    this.handleStep = this.handleStep.bind(this);
	    this.spacepixels = spacepixels;
	    this.init();
	  }

	  (0, _createClass3.default)(BoidDecorator, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'activate',
	    value: function activate() {
	      this.spacepixels.simulator.velocityFlags.boids = true;
	      this.spacepixels.on('step', this.handleStep);
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.spacepixels.simulator.velocityFlags.boids = false;
	      this.spacepixels.removeListener('step', this.handleStep);
	    }
	  }, {
	    key: 'handleStep',
	    value: function handleStep(dt, time) {}
	  }, {
	    key: 'simulator',
	    get: function get() {
	      return this.spacepixels.simulator;
	    }
	  }]);
	  return BoidDecorator;
	}();

	exports.default = BoidDecorator;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _pathFactory = __webpack_require__(202);

	var _pathFactory2 = _interopRequireDefault(_pathFactory);

	var _pathPlotter = __webpack_require__(204);

	var _pathPlotter2 = _interopRequireDefault(_pathPlotter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var duration = 40;

	var MovingTarget = function () {
	  function MovingTarget(spacepixels) {
	    (0, _classCallCheck3.default)(this, MovingTarget);

	    this.handleStep = this.handleStep.bind(this);
	    this.spacepixels = spacepixels;

	    this.init();
	  }

	  (0, _createClass3.default)(MovingTarget, [{
	    key: 'init',
	    value: function init() {
	      this.pathPlotter = new _pathPlotter2.default();
	      this.pathPlotter.add(_pathFactory2.default.getDefaultPath(0.05));
	    }
	  }, {
	    key: 'handleStep',
	    value: function handleStep(dt, time) {
	      var ratio = time % duration / duration;

	      this.pathPlotter.step(ratio);

	      this.simulator.velocityUniforms.uTargetPosition.value.copy(this.pathPlotter.currentPosition);
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      this.simulator.velocityFlags.followPoint = true;
	      this.spacepixels.world.scene.add(this.pathPlotter.drawer);
	      this.spacepixels.on('step', this.handleStep);
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.simulator.velocityFlags.followPoint = false;

	      this.spacepixels.world.scene.remove(this.pathPlotter.drawer);
	      this.spacepixels.removeListener('step', this.handleStep);
	    }
	  }, {
	    key: 'simulator',
	    get: function get() {
	      return this.spacepixels.simulator;
	    }
	  }]);
	  return MovingTarget;
	}();

	exports.default = MovingTarget;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _three = __webpack_require__(93);

	var _three2 = _interopRequireDefault(_three);

	var _pathDrawer = __webpack_require__(203);

	var _pathDrawer2 = _interopRequireDefault(_pathDrawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//http://threejs.org/examples/webgl_geometry_spline_editor.html

	function defaultPath(scale) {
	  var vertices = [new _three2.default.Vector3(183.82773679913026, -5.490634820449451, 101.63940256499984), new _three2.default.Vector3(63.52612748516373, 0.11977136878908823, -2.2083697667991102), new _three2.default.Vector3(9.981421434893676, 51.60363481643016, -64.05138024426003), new _three2.default.Vector3(-58.50084839100885, -14.577238607049125, -34.670403560388635), new _three2.default.Vector3(-11.810860140309892, -1.888728748187404, 28.14611990486584), new _three2.default.Vector3(28.25378476181088, 30.498463879751707, -26.52757074518796), new _three2.default.Vector3(-112.52454145144266, 36.4381108142651, 49.9097904148296), new _three2.default.Vector3(0, 0, 152.71152905138982)];
	  var matrix = createMatrix(scale);

	  for (var i = 0, il = vertices.length; i < il; i++) {

	    var vertex = vertices[i];
	    vertex.applyMatrix4(matrix);
	  }
	  return generatePath(vertices);
	}

	function createMatrix() {
	  var scale = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	  var matrix = new _three2.default.Matrix4();
	  matrix.multiplyScalar(scale);
	  return matrix;

	  //var euler = new THREE.Euler( Math.PI, 0, 0, 'YXZ' );
	  var q = new _three2.default.Quaternion();
	  q.setFromEuler(euler);

	  var p = new _three2.default.Vector3(0, 0, 0),
	      s = new _three2.default.Vector3(scale, scale, scale);

	  matrix.compose(p, q, s);
	}

	function createCatmull(vertices) {
	  return generatePath(vertices);
	}

	function generatePath(list) {
	  var curve = new _three2.default.CatmullRomCurve3(list);
	  return curve;
	}

	function getDefaultPath() {
	  var scale = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	  return defaultPath(scale);
	}

	exports.default = {
	  getDefaultPath: getDefaultPath, createCatmull: createCatmull
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(THREE) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(81);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PathDrawer = function (_THREE$Object3D) {
	  (0, _inherits3.default)(PathDrawer, _THREE$Object3D);

	  function PathDrawer(path) {
	    (0, _classCallCheck3.default)(this, PathDrawer);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PathDrawer).call(this));

	    _this.path = path;
	    _this.createArrow();
	    return _this;
	  }

	  (0, _createClass3.default)(PathDrawer, [{
	    key: "createArrow",
	    value: function createArrow() {
	      var dir = new THREE.Vector3(1, 0, 0);
	      var origin = new THREE.Vector3(0, 0, -1);
	      var length = 1;
	      var hex = 0xff0000;
	      var headWidth = 0.5;
	      var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex, headWidth);
	      arrowHelper.scale.setScalar(1.0);
	      arrowHelper.up = new THREE.Vector3(1, 0, 0);
	      this.arrowHelper = arrowHelper;
	      this.add(this.arrowHelper);
	    }
	  }, {
	    key: "addCurve",
	    value: function addCurve(curve) {
	      this.createLine(curve);
	    }
	  }, {
	    key: "createLine",
	    value: function createLine(curve) {
	      var geometry = new THREE.Geometry();
	      geometry.vertices = this.path._internalPath.getPoints(50);
	      geometry.verticesNeedUpdate = true;
	      var material = new THREE.LineBasicMaterial({ color: 0xff0000 });

	      var geometry = new THREE.Geometry();
	      geometry.vertices = curve.getPoints(50);
	      geometry.verticesNeedUpdate = true;

	      var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 3 }));
	      this.add(line);
	    }
	  }, {
	    key: "step",
	    value: function step(p1, p2) {
	      var direction = p1.clone().sub(p2).normalize();

	      this.arrowHelper.setDirection(direction);
	      this.arrowHelper.position.copy(p1);
	    }
	  }]);
	  return PathDrawer;
	}(THREE.Object3D);

	exports.default = PathDrawer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(THREE) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _pathDrawer = __webpack_require__(203);

	var _pathDrawer2 = _interopRequireDefault(_pathDrawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PathPlotter = function () {
	  function PathPlotter() {
	    (0, _classCallCheck3.default)(this, PathPlotter);

	    this._currentPosition = new THREE.Vector3();
	    this._internalPath = new THREE.CurvePath();
	    this._drawer = new _pathDrawer2.default(this);
	  }

	  (0, _createClass3.default)(PathPlotter, [{
	    key: 'add',
	    value: function add(curve) {
	      this._internalPath.add(curve);
	      this._drawer.addCurve(curve);
	    }
	  }, {
	    key: 'step',
	    value: function step(t) {
	      if (t < 0.001) {
	        t = 0.001;
	      }

	      var pos = this._internalPath.getPoint(t);
	      this._currentPosition.copy(pos);

	      var plottedPosition = this._internalPath.getPoint(t - 0.001); //look forward
	      var direction = pos.clone().sub(plottedPosition).normalize();

	      //camera.position.copy(pos2);
	      //camera.lookAt( pos);

	      if (this._drawer) {
	        this._drawer.step(pos, plottedPosition);
	      }
	    }
	  }, {
	    key: 'drawer',
	    get: function get() {
	      return this._drawer;
	    }
	  }, {
	    key: 'currentPosition',
	    get: function get() {
	      return this._currentPosition;
	    }
	  }]);
	  return PathPlotter;
	}();

	exports.default = PathPlotter;
	exports.default = PathPlotter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }
]);