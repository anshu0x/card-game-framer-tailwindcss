import { expect, test } from "vitest";
import { createCard, getRank, getSuite, Rank, Suite } from "./lib";

test("createCard()", () => {
  expect(createCard(Suite.Clubs, Rank.Ace)).toBe(0);
  expect(createCard(Suite.Spades, Rank.Ace)).toBe(0b000011);
  expect(createCard(Suite.Diamonds, Rank.Num2)).toBe(0b000101);
  expect(createCard(Suite.Diamonds, Rank.Num3)).toBe(0b001001);
  expect(createCard(Suite.Diamonds, Rank.Num4)).toBe(0b001101);
  expect(createCard(Suite.Clubs, Rank.Num4)).toBe(0b001100);
});

test("getSuite()", () => {
  expect(getSuite(createCard(Suite.Clubs, Rank.Ace))).toBe(Suite.Clubs);
  expect(getSuite(createCard(Suite.Diamonds, Rank.Queen))).toBe(Suite.Diamonds);
  expect(getSuite(createCard(Suite.Hearts, Rank.King))).toBe(Suite.Hearts);
  expect(getSuite(createCard(Suite.Spades, Rank.Ace))).toBe(Suite.Spades);
});

test("getRank()", () => {
  expect(getRank(createCard(Suite.Clubs, Rank.Ace))).toBe(Rank.Ace);
  expect(getRank(createCard(Suite.Clubs, Rank.Num2))).toBe(Rank.Num2);
  expect(getRank(createCard(Suite.Diamonds, Rank.Jack))).toBe(Rank.Jack);
  expect(getRank(createCard(Suite.Hearts, Rank.King))).toBe(Rank.King);
  expect(getRank(createCard(Suite.Spades, Rank.Num10))).toBe(Rank.Num10);
});
