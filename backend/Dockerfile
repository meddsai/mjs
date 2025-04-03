FROM rust:1.75-slim-bullseye AS base
WORKDIR /app

FROM base AS development
RUN cargo install cargo-watch
COPY . .
CMD ["cargo", "watch", "-x", "run"]

FROM base AS production
COPY . .
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    pkg-config \
    libssl-dev \
    ca-certificates && \
    cargo build --release && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
CMD ["./target/release/mjs-backend"]
