const CHUNKS_SIZE = 23; // an odd number // normally 23
const CHUNKS_ONEWAY_COUNT = 41; // must be an odd number
const MAP_WIDTH = CHUNKS_SIZE*CHUNKS_ONEWAY_COUNT;
const MAP_HEIGHT = MAP_WIDTH;

const CHUNKS_BASE_COUNT = 2; // normally 2

const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
const DUN_COLOR = ["#252525", "#aaa89c"];
// color for background on dungeons? #e4dcb7

/** @type {Tile[][]} */
let mapTiles = [];

/** @type {Chunk[]} */
let mapChunks = [];

let progressLevel = 1;
const BASE_CHEST_COUNT = 1;
const BASE_CREATE_COUNT = 3;
const BASE_ENEMY_COUNT = 4;

const CANVAS_HEIGHT = 450; // 450
const CANVAS_WIDTH = 800; // 800
const BASE_SCALE = 24; // leave it on 24

const SPRITE_SIZE = 32; // better not change

const MOVEMENT_SPEED = 1; // normally 1
let FOV = 10; // normally 20 // final 7?