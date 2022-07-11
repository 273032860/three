import { doThreePointsMakeARight } from 'maath/triangle'
// import { Vector2 } from 'three'

export class ConvexHull {
  constructor(points = []) {
    this.points = points
    this.convexHull = []

    this.convexHull = convexHull(this.points)

    this.lastT = 0
  }

  add = (point) => {
    this.points.push(point)

    this.convexHull = convexHull([...this.convexHull, point])
  }

  setPoints = (points) => {
    this.points = points
    this.convexHull = convexHull(this.points)
  }
}

// TODO make a more correct sorting fn, this is probably only good enough
export function lexicographic(a, b) {
  if (a.x === b.x) {
    // do a check to see if points is 3D,
    // in which case add y eq check and sort by z
    if (typeof a.z !== 'undefined') {
      if (a.y === b.y) {
        return a.z - b.z
      }
    }

    return a.y - b.y
  }

  return a.x - b.x
}

/**
 * Calculate the convex hull of a set of points
 */
export function convexHull(_points) {
  let points = _points.sort(lexicographic)

  // put p1 and p2 in a list lUpper with p1 as the first point
  const lUpper = [points[0], points[1]]

  // for i <- 3 to n
  for (let i = 2; i < points.length; i++) {
    lUpper.push(points[i])

    // while lUpper contains more than 2 points and the last three points in lUpper do not make a right turn
    while (lUpper.length > 2 && doThreePointsMakeARight([...lUpper.slice(-3)])) {
      // delete the middle of the last three points from lUpper
      lUpper.splice(lUpper.length - 2, 1)
    }
  }

  // put pn and pn-1 in a list lLower with pn as the first point
  const lLower = [points[points.length - 1], points[points.length - 2]]

  // for (i <- n - 2 downto 1)
  for (let i = points.length - 3; i >= 0; i--) {
    // append pi to lLower
    lLower.push(points[i])

    // while lLower contains more than 2 points and the last three points in lLower do not make a right turn
    while (lLower.length > 2 && doThreePointsMakeARight([...lLower.slice(-3)])) {
      // delete the middle of the last three points from lLower
      lLower.splice(lLower.length - 2, 1)
    }
  }

  // remove the first and last point from lLower to avoid duplication of the points where the upper and lower hull meet
  lLower.splice(0, 1)
  lLower.splice(lLower.length - 1, 1)

  // prettier-ignore
  const c = [
    ...lUpper,
    ...lLower,
  ]

  return c
}
