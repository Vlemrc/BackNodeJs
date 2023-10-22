const PKM = require('../models/pkm');

// Create and Save a new Pkm

exports.create = (req, res) => {

  const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });
    pkm.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// All Pkms from Database

exports.findAll = (req, res) => {
    PKM.find()
        .then(pkms => {
            res.send(pkms);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete a pkm

exports.delete = (req, res) => {
    PKM.deleteOne({_id: req.params.id}).then(
    data => {
        console.log(data)
      res.status(200).json({message: 'Deleted!'});
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

// Update a pkm

exports.update = (req, res) => {
const pkm = new PKM({
    _id: req.params.id,
    name: req.body.name,
    type: req.body.type,
    level: req.body.level,
  });
  PKM.updateOne({_id: req.params.id}, pkm).then(
    () => {
        if(!data) res.send('pas trouvé')
      res.status(201).json({
        message: 'Pokemon updated successfully!'
      });
    }
  ).catch(
    (error) => {
     console.log(error)
      res.status(400).json({
        error: error
      });
    }
  );
}