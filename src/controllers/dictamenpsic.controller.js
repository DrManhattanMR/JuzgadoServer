import { request } from "express";
import app from "../app";
import {
  dbSettings,
  getConnection,
  querysDictamenPsic,
  sql,
} from "../database";
export const getAllDictamenesPsic = async (req, res) => {
  try {
    const pool = await getConnection();
    console.log(pool);
    const result = await pool
      .request()
      .query(querysDictamenPsic.ObtenerTodosDictamenesPsic);
    res.json(result.recordset);
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.send(error.message);
  }
};

export const getDictamenPsic = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("IdFolioCaso", req.params.IdFolioCaso)
      //.input("IdFolioIPH", req.params.IdFolioIPH)
      .query(querysDictamenPsic.ObtDictamenPsic);
    if (result.recordset.length > 0) {
      return res.json(result.recordset[0]);
    } else {
      return res.status(500).json({ msg: "No existe Dictamen" });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewDictamenPsic = async (req, res) => {
  const {
    IdFolioCaso,
    FechaDictamen,
    HoraDictamen,
    PersonaCargo,
    Resolucion,
  } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
      //.input("IdFolioIPH", sql.VarChar, IdFolioIPH)
      .input("FechaDictamen", sql.Date, FechaDictamen)
      .input("HoraDictamen", sql.Time, HoraDictamen)
      .input("PersonaCargo", sql.VarChar, PersonaCargo)
      .input("Resolucion", sql.Text, Resolucion)
      .query(querysDictamenPsic.AgregarDictamen);
    res.status(200).json({ msg: "Agregado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const eliminarDictamenPsic = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(querysDictamenPsic.EliminarDictamenPsic);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    res.status(200).json({ msg: "Eliminado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const editarDictamenPsic = async (req, res) => {
  console.log(req.body)
  const { personaCargo, resolucion } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("personaCargo", sql.VarChar, personaCargo)
      .input("resolucion", sql.Text, resolucion)
      .input("id", req.params.id)
      .query(querysDictamenPsic.EditarDictamenPsic);
    if (result.rowsAffected[0] === 0) return res.status(500).json({ msg: "No se pudo Editar" });
    res.status(200).json({ msg: "Editado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};








