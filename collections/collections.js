
//Posts = new Meteor.Collection("posts", {
//  schema: new SimpleSchema({
//
//    title: {
//      type: String,
//      label: "Title",
//    },
//
//  })
//});


Boards = new Meteor.Collection("boards", {
	schema: new SimpleSchema({
		title: {
			type: String,
			label: "Title"
		},
		creator: {
			type: String,
			label: "Creator"
		},
		created: {
			type: String,
			label: "Created"
		},
		editors: {
			type: [String],
			label: "Editors"
		},
		slug: {
			type: String,
			label: "Slug"
		},
		visibility: {
			type: Boolean,
			label: "Visibility"
		}
	})
});


Colors = new Meteor.Collection("colors", {
	schema: new SimpleSchema({
		board: {
			type: String,
			label: "Board"
		},
		color: {
			type: String,
			label: "Color Code"
		},
		creator: {
			type: String,
			label: "Creator"
		},
		created: {
			type: Date,
			label: "Created"
		},
		updated: {
			type: Date,
			label: "Updated"
		}
	})
});
