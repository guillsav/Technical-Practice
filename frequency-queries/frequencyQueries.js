/*
You are given q queries. Each query is of the form two integers described below:
- 1x: Insert x in your data structure.
- 2y: Delete one occurence of y from your data structure, if present.
- 3z: Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array querries of size q where queries[i][0]  contains the operation, and queries[i][1] contains the data element. For example, you are given array queries = [(1,1), (2,2), (3,2), (1,1), (1,1), (2,1), (3,2)]. The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1

Return an array with the output: [0, 1].
*/

function frequencyQueries(queries) {
  const len = queries.length
  const res = []
  const freq = {}
  const count = {}
  let cmd = null
  let val = null

  for (let i = 0; i < len; i++) {
    cmd = queries[i][0]
    val = queries[i][1]

    if (cmd === 1) {
      if (!freq[val]) freq[val] = 0
      if (count[freq[val]]) count[freq[val]]--
      freq[val]++
      if (!count[freq[val]]) count[freq[val]] = 0
      count[freq[val]]++
    }

    if (cmd === 2) {
      if (freq[val] && freq[val] > 0) {
        count[freq[val]]--
        freq[val]--
        count[freq[val]]++
      }
    }

    if (cmd === 3) {
      if (count[val]) res.push(1)
      else res.push(0)
    }
  }
  return res
}

console.log(
  frequencyQueries([(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)])
)
