function applyPalette(event) {
  const root = document.documentElement
  const selectedButtonElementId = event.target.id
  if (selectedButtonElementId === 'pallete-1-btn') {
    root.style.setProperty('--header-1-color-1', 'rgb(140, 0, 255)')
    root.style.setProperty('--header-2-color-1', 'rgb(79, 10, 190)')
    root.style.setProperty('--header-3-color-1', 'rgb(245, 232, 255)')

    root.style.setProperty('--header-title-text-color-1', '--color-grey-900')
    root.style.setProperty(
      '--header-paragraph-text-color-1',
      '--color-grey-900',
    )

    root.style.setProperty('--configuration-background-1', 'rgb(243, 227, 255)')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', 'rgb(50, 5, 87)')
    root.style.setProperty('--player-number-1', 'rgb(0, 0, 0)')
    root.style.setProperty('--player-symbol-1', 'rgb(47, 4, 82)')

    root.style.setProperty('--inactive-game-board-1', 'rgb(215, 187, 247)')
    root.style.setProperty('--active-game-board-1', 'rgb(112, 13, 204)')
  } else if (selectedButtonElementId === 'pallete-2-btn') {
    root.style.setProperty('--header-1-color-1', '#e3c770')
    root.style.setProperty('--header-2-color-1', '#fecd70')
    root.style.setProperty('--header-3-color-1', '#5c4104')

    root.style.setProperty('--header-title-text-color-1', '--color-grey-900')
    root.style.setProperty(
      '--header-paragraph-text-color-1',
      '--color-grey-900',
    )

    root.style.setProperty('--configuration-background-1', '#f3e0b5')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', '#5c4104')
    root.style.setProperty('--player-number-1', '#000000')
    root.style.setProperty('--player-symbol-1', '#5c4104')

    root.style.setProperty('--inactive-game-board-1', '#fccf7a')
    root.style.setProperty('--active-game-board-1', '#bea762')
  } else if (selectedButtonElementId === 'pallete-3-btn') {
    root.style.setProperty('--header-1-color-1', '#15133c')
    root.style.setProperty('--header-2-color-1', '#73777b')
    root.style.setProperty('--header-3-color-1', '#ec994b')

    root.style.setProperty('--header-title-text-color-1', '#ffffff')
    root.style.setProperty('--header-paragraph-text-color-1', '#ffffff')

    root.style.setProperty('--configuration-background-1', '#f1eee9')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', '#ec994b')
    root.style.setProperty('--player-number-1', '#000000')
    root.style.setProperty('--player-symbol-1', '#ec994b')

    root.style.setProperty('--inactive-game-board-1', '#73777b')
    root.style.setProperty('--active-game-board-1', '#15133c')
  } else if (selectedButtonElementId === 'pallete-4-btn') {
    root.style.setProperty('--header-1-color-1', 'rgb(149, 21, 85)')
    root.style.setProperty('--header-2-color-1', 'rgb(119, 17, 68)')
    root.style.setProperty('--header-3-color-1', 'rgb(253, 240, 246)')

    root.style.setProperty('--header-title-text-color-1', '#ffffff')
    root.style.setProperty('--header-paragraph-text-color-1', '#ffffff')

    root.style.setProperty('--configuration-background-1', 'rgb(119, 17, 68)')
    root.style.setProperty('--configuration-btn-1', 'rgb(241, 146, 194)')

    root.style.setProperty('--player-name-1', 'rgb(235, 174, 202)')
    root.style.setProperty('--player-number-1', 'rgb(235, 174, 202)')
    root.style.setProperty('--player-symbol-1', 'rgb(253, 240, 246)')

    root.style.setProperty('--inactive-game-board-1', 'rgb(253, 240, 246)')
    root.style.setProperty('--active-game-board-1', 'rgb(149, 21, 85)')
  }
}
