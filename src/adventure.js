var json = {
  situations: [
    {
      id: 0,
      action: "Fange von vorne an.",
      text:
        "Ein Text Adventure <br> Version 1.0",
      goals: [1]
    },
    {
      id: 1,
      action: "Du betrittst das Museum",
      text:
        "\
      Du bist viel zu spät in das alte Museum gekommen. \
      Dir bleibt nur noch wenig Zeit, bis das Museum schließt. \
      Der erste Gong ertönt, Zeit sich zum Ausgang zu bewegen. \
      ",
      goals: [2, 3]
    },
    {
      id: 2,
      action: "Du schaust dir ganz schnell noch den Nebenraum an.",
      text:
        "\
      Du gehst noch schnell in den Gang, der von dem Hauptraum abzweigt. \
      Zahlreiche Artefakte einer vergangenen Epoche sind ausgestellt. \
      Du vergisst die Zeit und überhrst den zweiten Gong. Plötzlich \
      wird es dunkel, als alle Lichter ausgeschaltet werden. \
      ",
      goals: [4]
    },
    {
      id: 3,
      action: "Du gehst zum Ausgang.",
      text:
        "\
      Du machst dich schnellen Schrittes auf den Weg zum Ausgang. \
      Du willst dich beeilen, doch du rutscht aus und stürzt. \
      Du schlägst mit dem Kopf auf und wirst bewusstlos. \
      Nach einer Weile wachst du auf. Um dich herum ist alles dunkel. \
      ",
      goals: [4]
    },
    {
      id: 4,
      action: "Du gehts in die Dunkelheit",
      text: "\
      Es ist vollkommen dunkel. Für einen Moment bist du orientierungslos. \
      Du tastest nach deinem Handy, um Licht zu machen, als du Geräuche \
      hörst. Sie kommen offenbar aus dem Nebenraum. \
      ",
      goals: [7,5]
    },
    {
      id: 5,
      action: "Du läufst in Richtung Ausgang.",
      text: "\
      Am Ausgang siehst du den Wärter gerade die Tür absperren. \
      Er sieht dich und meckert mit dir, weil du zu spät bist. \
      Aber er lässt dich noch heraus. \
      ",
      goals: [0]
    },
    {
      id: 7,
      action: "Du folgst den Geräuchen.",
      text: "\
      Das ist das Ende. Erst mal. \
      ",
      goals: [0]
    }
  ]
};
