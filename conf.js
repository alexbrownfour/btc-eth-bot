var c = module.exports = {}

/// This conf is for NEURAL strategy as a profitable sim example, use --period=1m
//  mongo configuration
c.mongo = {}
c.mongo.connectionString = process.env.ZENBOT_MONGODB_CONNECTION_STRING || 'mongodb+srv://bot:12Frogsbot@cluster0.qrnrp.mongodb.net/trading?retryWrites=true&w=majority'

//c.mongo.host = process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost'
//c.mongo.port = 27017
//c.mongo.db = 'zenbot4'
//c.mongo.username = null
//c.mongo.password = null
// when using mongodb replication, i.e. when running a mongodb cluster, you can define your replication set here; when you are not using replication (most of the users), just set it to `null` (default).
c.mongo.replicaSet = null

// default selector. only used if omitting [selector] argument from a command.
c.selector = ''
// name of default trade strategy
c.strategy = 'neural_custom'


// to enable Kraken trading, enter your API credentials:
c.kraken = {}
c.kraken.key = 'YOUR-API-KEY'
c.kraken.secret = 'YOUR-SECRET'
// Please read API TOS on https://www.kraken.com/u/settings/api
c.kraken.tosagree = 'disagree'

// to enable Binance trading, enter your API credentials:
c.binance = {}
c.binance.key = process.env.ZENBOT_BINANCE_API_KEY || 'EqEWdct4Zqs37UkpRRLJkxMToSFNE9EZui3lL1TGc2mr3rNo1B3UBoqenVrJWJMz'
c.binance.secret = process.env.ZENBOT_BINANCE_SECRET || 'ytJfp2ogGNA5e4KFWBY7fo6jZ8rMxIKZmwhzlZGm6luFqIvTtj9OswZGNxasbXun'


// Optional stop-order triggers:

// sell if price drops below this % of bought price (0 to disable)
c.sell_stop_pct = 0
// buy if price surges above this % of sold price (0 to disable)
c.buy_stop_pct = 0
// enable trailing sell stop when reaching this % profit (0 to disable)
c.profit_stop_enable_pct = 0
// maintain a trailing stop this % below the high-water mark of profit
c.profit_stop_pct = 1

// Order execution rules:

// avoid trading at a slippage above this pct
c.max_slippage_pct = .125
// buy with this % of currency balance (WARNING : sim won't work properly if you set this value to 100)
c.buy_pct = 75
// sell with this % of asset balance (WARNING : sim won't work properly if you set this value to 100)
c.sell_pct = 90
// ms to adjust non-filled order after
c.order_adjust_time = 15000
// avoid selling at a loss below this pct set to 0 to ensure selling at a higher price...
c.max_sell_loss_pct = 0.1
// avoid buying at a loss above this pct set to 0 to ensure buying at a lower price...
c.max_buy_loss_pct = 25
// ms to poll order status
c.order_poll_time = 15000
// ms to wait for settlement (after an order cancel)
c.wait_for_settlement = 5000
// % to mark down buy price for orders
c.markdown_buy_pct = 0.2
// % to mark up sell prie for orders
c.markup_sell_pct = 0.2
// become a market taker (high fees) or a market maker (low fees)
c.order_type = 'maker'
// when supported by the exchange, use post only type orders.
c.post_only = true

// Misc options:

// default # days for backfill and sim commands
c.days = 30
// ms to poll new trades at
c.poll_trades = 15000
// amount of currency to start simulations with
c.currency_capital = 0.00786019
// amount of asset to start simulations with
c.asset_capital = 0
// for sim, reverse time at the end of the graph, normalizing buy/hold to 0
c.symmetrical = false
// number of periods to calculate RSI at
c.rsi_periods = 14
// period to record balances for stats
c.balance_snapshot_period = '15m'
// avg. amount of slippage to apply to sim trades
c.avg_slippage_pct = 0.045
// time to leave an order open, default to 1 day (this feature is not supported on all exchanges, currently: GDAX)
c.cancel_after = 'day'

// Notifiers:
c.notifiers = {}


// output
c.output  = {}

// REST API
c.output.api = {}
c.output.api.on = true
c.output.api.port = 0 // 0 = random port
