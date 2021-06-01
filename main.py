def on_button_pressed_a():
    for index in range(4):
        basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)
