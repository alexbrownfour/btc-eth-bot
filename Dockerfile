FROM node:12.18.1 as builder
ADD . /app
WORKDIR /app
RUN npm install -g node-gyp
RUN npm install

FROM node:12.18.1-alpine

COPY zenbot.sh /usr/local/bin/zenbot

WORKDIR /app
RUN chown -R node:node /app

COPY --chown=node . /app
COPY --chown=node ./conf.js /app/conf.js
COPY --chown=node ./conf.js /conf
COPY --chown=node --from=builder /usr/local/lib/node_modules/ /usr/local/lib/node_modules/
COPY --chown=node --from=builder /app/node_modules /app/node_modules/



USER node
ENV NODE_ENV production

ENTRYPOINT ["/usr/local/bin/zenbot"]
CMD ["trade binance.ETH-BTC","--paper --conf=/app/extensions/strategies/neural_custom/conf-neural.js --verbose --stats --debug --decay=0.001 --neurons_1=5 --depth=100 --min_predict=100 --period=16s  --use_prev_trades"]
