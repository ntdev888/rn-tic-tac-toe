import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <Pressable onPress={onSquareClick}>
      <Text style={gamestyles.square}>{value}</Text>
    </Pressable>
  );
}

function Gamebox() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  function isWinner(value, current) {
    const winConditions = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    if (current == true) {
      const newArray = value
        .map((element, index) => {
          if (element === "X") {
            return index;
          }
        })
        .filter((index) => index !== undefined);

      const isWin = winConditions.some((condition) =>
        condition.every((index) => newArray.includes(index))
      );

      if (isWin) {
        console.log("X"); // Output: X
        setWinner("X");
      }
    }

    if (current == false) {
      const newArray = value
        .map((element, index) => {
          if (element === "O") {
            return index;
          }
        })
        .filter((index) => index !== undefined);

      const isWin = winConditions.some((condition) =>
        condition.every((index) => newArray.includes(index))
      );

      if (isWin) {
        console.log("O"); // Output: O
        setWinner("O");
      }
    }
  }

  function handlePress(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    isWinner(nextSquares, xIsNext);
    setXIsNext(!xIsNext);
    // msg(nextSquares);
  }

  function handleReload() {
    setSquares(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <View style={gamestyles.gamebox}>
      <View style={gamestyles.row}>
        <Square
          value={squares[0]}
          onSquareClick={() => handlePress(0)}
          id={1}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handlePress(1)}
          id={2}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handlePress(2)}
          id={3}
        />
      </View>
      <View style={gamestyles.row}>
        <Square
          value={squares[3]}
          onSquareClick={() => handlePress(3)}
          id={4}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handlePress(4)}
          id={5}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handlePress(5)}
          id={6}
        />
      </View>
      <View style={gamestyles.row}>
        <Square
          value={squares[6]}
          onSquareClick={() => handlePress(6)}
          id={7}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handlePress(7)}
          id={8}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handlePress(8)}
          id={9}
        />
      </View>
      <View style={gamestyles.gamebox}>
        <Button title="Reload" onPress={handleReload} />
      </View>
      {winner ? (
        <Text style={gamestyles.winBox}>Winner is : {winner}</Text>
      ) : null}
    </View>
  );
}

const gamestyles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  gamebox: {
    margin: 12,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },

  square: {
    height: 74,
    width: 74,
    margin: 2,
    fontSize: 50,
    textAlign: "center",
    backgroundColor: "lightblue",
    borderRadius: 10,
  },

  button: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  winBox: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
});

export default Gamebox;
