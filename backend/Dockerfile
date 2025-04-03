FROM rust:1.75 AS base
WORKDIR /app

FROM base AS development
RUN cargo install cargo-watch
COPY . .
CMD ["cargo", "watch", "-x", "run"]

FROM base AS production
COPY . .
RUN cargo build --release
CMD ["./target/release/mjs-backend"] 