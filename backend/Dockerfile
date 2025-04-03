FROM rust:1.75-slim-bullseye AS base
WORKDIR /app

FROM base AS development
RUN cargo install cargo-watch
COPY . .
CMD ["cargo", "watch", "-x", "run"]

FROM base AS production
COPY . .
RUN apt-get update && \
    apt-get install -y pkg-config libssl-dev && \
    cargo build --release && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
CMD ["./target/release/mjs-backend"] 