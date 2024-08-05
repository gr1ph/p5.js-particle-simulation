[Original PDF Link](https://www.sciencedirect.com/science/article/pii/0021999187901409)

# Highlights

## Authors
- L. Greengard
- V. Rokhlin

## Published
- Journal of Computational Physics, 1987

## Abstract
The paper introduces the Fast Multipole Method (FMM), a highly efficient algorithm for solving the N-body problem, which involves calculating the interactions between a large number of particles. The FMM reduces the computational complexity from \(O(N^2)\) to \(O(N)\) or \(O(N \log N)\), making it feasible to simulate systems with a large number of particles.

## Key Concepts

### N-body Problem
- The N-body problem involves predicting the individual motions of a group of celestial objects interacting with each other gravitationally.
- Traditional methods have a computational complexity of \(O(N^2)\), which becomes impractical for large \(N\).

### Fast Multipole Method (FMM)
- The FMM is an algorithm that accelerates the computation of long-range forces in N-body simulations.
- It divides the space containing particles into hierarchical cells.
- Interactions are computed in a hierarchical manner, grouping distant particles and approximating their influence.

### Hierarchical Decomposition
- The space is recursively divided into smaller cells, creating a tree structure.
- Each cell contains a multipole expansion that approximates the influence of particles within the cell.

### Multipole Expansion
- A mathematical series used to approximate the potential due to a group of particles.
- Reduces the need to compute interactions between every pair of particles directly.

### Local Expansion
- Converts multipole expansions into local expansions to compute the influence on nearby particles.
- Allows efficient computation of forces on particles within a cell.

## Algorithm Steps
1. **Tree Construction**: Recursively divide the space into cells, forming a hierarchical tree.
2. **Upward Pass**: Compute multipole expansions for each cell, starting from the leaves and moving up to the root.
3. **Downward Pass**: Convert multipole expansions to local expansions, starting from the root and moving down to the leaves.
4. **Force Computation**: Use local expansions to compute forces on individual particles.

## Advantages
- **Efficiency**: Reduces computational complexity to \(O(N)\) or \(O(N \log N)\).
- **Scalability**: Suitable for large-scale simulations with millions of particles.
- **Accuracy**: Provides accurate approximations of long-range forces.

## Applications
- Astrophysics: Simulating the dynamics of star clusters, galaxies, and cosmological structures.

# Original Document in docs/v1/original/algorithm.pdf
- Molecular Dynamics: Studying the behavior of molecules and biological systems.
- Fluid Dynamics: Modeling the behavior of fluids with many interacting particles.
