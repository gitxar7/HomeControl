/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.Device;
import entity.History;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author Prince
 */
@WebServlet(name = "LoadHistory", urlPatterns = {"/LoadHistory"})
public class LoadHistory extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            
            Session session = HibernateUtil.getSessionFactory().openSession();
            
            Gson gson = new Gson();
//            JsonObject resp_json = new JsonObject();
//            resp_json.addProperty("success", false);
//            resp_json.addProperty("message", "Unable to process your request");

            Criteria criteria3 = session.createCriteria(History.class);
            
//            System.out.println(req.getParameter("id"));

            if (req.getParameter("id") != null) {
                Device device = (Device) session.get(Device.class, Integer.parseInt(req.getParameter("id")));
                criteria3.add(Restrictions.eq("device", device));
            }

            ArrayList<History> historyList = (ArrayList<History>) criteria3.list();

            JsonObject json = new JsonObject();
            json.add("historyList", gson.toJsonTree(historyList));
            
//            resp_json.addProperty("success", true);
//            resp_json.addProperty("message", "Home Page Loaded");

            resp.setContentType("application/json");
            resp.getWriter().write(gson.toJson(json));
//            resp.getWriter().write(gson.toJson(resp_json));

            session.close();

        } catch (Exception e) {
            System.out.println("Error: LoadHistory: doGet" + new Date());
            e.printStackTrace();
        }
    }

}
